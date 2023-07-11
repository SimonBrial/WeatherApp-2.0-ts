import { InitialState } from "../interface/interface";
import fakeData from "../fakeData/currentWeatherFake.json";
export const initialState: InitialState = {
    currentWeather: {
        data: fakeData.currentConditions,
        errorMsg: "state",
        statusPermission: false,
    },
    hightlight: fakeData.currentConditions,
    forecast: {
        data: fakeData.days,
        errorMsg: "state",
        statusPermission: false,
    },
    fahrenheit: false,
    celcius: true,
};
