import { useReducer } from "react";
import { AppContext, AppReducer } from "..";
import {
    CURRENT_DATA_BY_CITY,
    FORECAST_BY_CITY,
    CURRENT_DATA,
    FAHRENHEIT,
    FORECAST,
    CELCIUS,
} from "../actions";
import { getCityAndCode } from "../../utils/convertions";
import { initialState } from "../initialState";
import { ContextProps } from "../../interface/interface";
import errorHandle from "../../utils/errorHandle";
import { currentLocation } from "../../utils";
import {
    currentWeatherByLatLng,
    currentWeatherByTag,
    forecastWeatherByLatLng,
    forecastWeatherByTag,
} from "../../utils/apiRequest";

const AppState = (props: any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getDataByLatLng = async (latitude: number, longitude: number) => {
        try {
            const current = await currentWeatherByLatLng(latitude, longitude);
            const forecast = await forecastWeatherByLatLng(latitude, longitude);
            const { days } = forecast;

            dispatch({
                type: CURRENT_DATA,
                payload: {
                    data: current,
                    errorMsg: errorHandle("code_200"),
                    statusPermission: true,
                },
            });
            dispatch({
                type: FORECAST,
                payload: {
                    data: days,
                    errorMsg: errorHandle("code_200"),
                    statusPermission: true,
                },
            });
        } catch (err) {
            dispatch({
                type: CURRENT_DATA,
                payload: {
                    data: null,
                    errorMsg: errorHandle("Geolocation_error"),
                    statusPermission: false,
                },
            });
            dispatch({
                type: FORECAST,
                payload: {
                    data: null,
                    errorMsg: errorHandle("Geolocation_error"),
                    statusPermission: false,
                },
            });
        }
    };

    const getDataByCityName = async (city: string) => {
        
        try {
            const cityAndCode = await getCityAndCode(city);
            const current = await currentWeatherByTag(cityAndCode[0], cityAndCode[1]);
            const forecast = await forecastWeatherByTag(cityAndCode[0]);
            const { days } = forecast;

            dispatch({
                type: CURRENT_DATA_BY_CITY,
                payload: {
                    data: current,
                    errorMsg: errorHandle("code_200"),
                    statusPermission: true,
                },
            });
            dispatch({
                type: FORECAST_BY_CITY,
                payload: {
                    data: days,
                    errorMsg: errorHandle("code_200"),
                    statusPermission: true,
                },
            });
        } catch (err) {
            dispatch({
                type: CURRENT_DATA_BY_CITY,
                payload: {
                    data: null,
                    errorMsg: errorHandle("Geolocation_error"),
                    statusPermission: false,
                },
            });
            dispatch({
                type: FORECAST_BY_CITY,
                payload: {
                    data: null,
                    errorMsg: errorHandle("Geolocation_error"),
                    statusPermission: false,
                },
            });
        }
    };

    const getLocation = async () => {
        try{
            const coordsData = await currentLocation();
            getDataByLatLng(coordsData.coords.latitude, coordsData.coords.longitude)

        }
        catch(err) {
            dispatch({
                type: CURRENT_DATA,
                payload: {
                    data: null,
                    errorMsg: errorHandle("Geolocation_error"),
                    statusPermission: false,
                },
            });
            dispatch({
                type: FORECAST,
                payload: {
                    data: null,
                    errorMsg: errorHandle("Geolocation_error"),
                    statusPermission: false,
                },
            });
            console.log(err)
        }
    }

    const fahrenheitConvertion = () => {
        return dispatch({
            type: FAHRENHEIT,
            payload: true,
        });
    };

    const celciusConvertion = () => {
        return dispatch({
            type: CELCIUS,
            payload: false,
        });
    };

    const contextValue: ContextProps = {
        currentWeather: state.currentWeather,
        currentWeather2: state.currentWeather2,
        fahrenheit: state.fahrenheit,
        hightlight: state.hightlight,
        forecast: state.forecast,
        forecast2: state.forecast2,
        appUnits: state.appUnits,
        celcius: state.celcius,
        fahrenheitConvertion,
        getDataByCityName,
        celciusConvertion,
        getDataByLatLng,
        getLocation,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
