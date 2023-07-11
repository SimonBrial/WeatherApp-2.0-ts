import {
    CURRENT_DATA,
    FORECAST,
    FAHRENHEIT,
    CELCIUS,
} from "../context/actions";
// DataPosition
type Action =
    | { type: CURRENT_DATA; payload: CurrentWeatherResponse }
    | { type: FORECAST; payload: ForecastData }
    | { type: FAHRENHEIT; payload: boolean }
    | { type: CELCIUS; payload: boolean };

export { Action };
