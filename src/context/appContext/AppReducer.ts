import {
    GET_CURRENT_LOCATION,
    FETCH_DATA,
    FAHRENHEIT,
    CELCIUS,
} from "../actions";

export default (state: any, action: any) => {
    const { payload, type } = action;

    switch (type) {
        case GET_CURRENT_LOCATION:
            return {
                ...state,
            };
        case FETCH_DATA:
            return {
                ...state,
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
