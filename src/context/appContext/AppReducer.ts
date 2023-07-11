import {
    CURRENT_DATA,
    FAHRENHEIT,
    FORECAST,
    CELCIUS,
} from "../actions";
import {Action} from "../../types/types"

export default (state: any, action: Action) => {
    const { payload, type } = action;

    switch (type) {
        case CURRENT_DATA:
            //console.log(payload);
            return {
                ...state,
                currentWeather: payload,
            };
        case FORECAST:
            //console.log(payload);
            return {
                ...state,
                forecast: payload,
            };
        case FAHRENHEIT:
            return {
                ...state,
            };
        case CELCIUS:
            return {
                ...state,
            };

        default:
            return state;
    }
};
