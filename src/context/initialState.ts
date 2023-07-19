import { InitialState } from "../interface/interface";
import forecastData from "../fakeData/forecastFakeData.json";
import currentData from "../fakeData/currentFakeData.json";
export const initialState: InitialState = {
    currentWeather: {
        data: currentData,
        errorMsg: "state",
        statusPermission: false,
    },
    hightlight: forecastData.currentConditions,
    forecast: {
        data: forecastData.days,
        errorMsg: "state",
        statusPermission: false,
    },
    fahrenheit: false,
    celcius: true,
};
