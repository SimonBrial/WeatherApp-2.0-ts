import { InitialState } from "../interface/interface";
import fakeData from "../fakeData/currentWeatherFake.json";
console.log(fakeData.currentConditions)
export const initialState: InitialState = {
    geolocation: {
        coords: {
            latitude: 10.1824,
            longitude: -68.0172,
            altitude: null,
            accuracy: 10832,
            altitudeAccuracy: null,
            heading: null,
            speed: null,
        },
        timestamp: 1688743511796,
    },
    currentWeather: fakeData.currentConditions,
    forecast: fakeData.days,
    hightlight: fakeData.currentConditions,
    celcius: true,
    fahrenheit: false,
    dataCurrentLocation: fakeData.currentConditions,
    dataSpecifyLocation: fakeData.currentConditions,
};
