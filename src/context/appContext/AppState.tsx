import { useReducer, useState } from "react";
import { AppContext, AppReducer } from "..";
import {
    GET_CURRENT_LOCATION,
    FETCH_DATA,
    CURRENT_DATA,
    FORECAST,
    FAHRENHEIT,
    CELCIUS,
} from "../actions";
import { initialState } from "../initialState";
import {
    ContextProps,
    CurrentLocationData,
    Response,
} from "../../interface/interface";
import errorHandle from "../../utils/errorHandle";
import {
    currentWeatherByLatLng,
    forecastWeatherByLatLng,
} from "../../utils/apiRequest";

const AppState = (props: any) => {
    /* const initialStatePosition: DataPosition = {
        base: "stations",
        clouds: { all: 0 },
        cod: 0,
        coord: { lon: 0, lat: 0 },
        dt: 0,
        id: 0,
        main: {
            feels_like: 0,
            grnd_level: 0,
            humidity: 0,
            pressure: 0,
            sea_level: 0,
            temp: 30,
            temp_max: 0,
            temp_min: 0,
        },
        name: "Simon",
        sys: {
            country: "VE",
            id: 0,
            sunrise: 0,
            sunset: 16808943469,
            type: 1,
        },
        timezone: 0,
        visibility: 0,
        weather: [
            {
                id: 0,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d",
            },
        ],
        wind: { speed: 1.93, deg: 149, gust: 3.56 },
    }; */
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
        return dispatch({
            type: FETCH_DATA,
            payload: city,
        });
    };

    const fahrenheitConvertion = () => {
        return dispatch({
            type: FAHRENHEIT,
            payload: true
        })
    };

    const celciusConvertion = () => {
        return dispatch({
            type: CELCIUS,
            payload: false
        })
    };

    const contextValue: ContextProps = {
        currentWeather: state.currentWeather,
        fahrenheit: state.fahrenheit,
        hightlight: state.hightlight,
        forecast: state.forecast,
        appUnits: state.appUnits,
        celcius: state.celcius,
        getDataByLatLng,
        getDataByCityName,
        fahrenheitConvertion,
        celciusConvertion
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
