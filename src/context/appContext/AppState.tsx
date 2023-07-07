import { useReducer } from "react";
import { AppContext, AppReducer } from "..";
/* import {
    GET_CURRENT_LOCATION,
    CELCIUS,
    FAHRENHEIT,
    FETCH_DATA,
} from "../actions"; */
import { initialState } from "../initialState";
import { ContextProps } from "../../interface/interface";

const AppState = (props: any) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const contextValue: ContextProps = {
        dataCurrentLocation: state.dataCurrentLocation,
        dataSpecifyLocation: state.dataSpecifyLocation,
        currentWeather: state.currentWeather,
        geolocation: state.geolocation,
        fahrenheit: state.fahrenheit,
        hightlight: state.hightlight,
        forecast: state.forecast,
        celcius: state.celcius,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};
