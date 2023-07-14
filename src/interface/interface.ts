import { ReactNode } from "react";
import {
    CurrentConditions,
} from "./DataWeather.interface";
import { DataPosition } from "./dataPosition.interface";
import { CurrentWeatherResponse, ForecastData } from "./DataResponse.interface";

interface InitialState {
    currentWeather?: CurrentWeatherResponse;
    hightlight?: CurrentConditions;
    fahrenheit?: boolean;
    celcius?: boolean;
    forecast?: ForecastData;
}

interface currentWeather {
    weatherImg: string;
    temp: number;
    tempUnit: boolean;
    weatherStr: string;
    date: dateCurrentWeather;
}

interface dateCurrentWeather {
    day: string;
    dateCurrent: string;
}

interface BtnTemperature {
    TempUnit: ReactNode;
    convertionUnit: () => void;
}

interface GeolocationCoordinates {
    accuracy: number;
    altitude: null;
    altitudeAccuracy: null;
    heading: null;
    latitude: number;
    longitude: number;
    speed: null;
}

interface CurrentLocationData {
    coords: GeolocationCoordinates;
    timestamp: number;
}

interface GeolocationError {
    code: number;
    message: string;
}

interface StyleTemp {
    tempSize: string;
    unitSize: string;
    tempColor?: string;
    tempValue: number;
    tempUnit: boolean;
}

interface ResponseData {
    data: currentWeather | DataPosition;
    errorMsg: string;
    statusPermission: boolean;
}

interface ContextProps {
    currentWeather?: CurrentWeatherResponse;
    hightlight?: CurrentConditions;
    fahrenheit?: boolean;
    celcius?: boolean;
    appUnits: boolean;
    forecast?: ForecastData;

    getDataByLatLng : (
        latitude: number,
        longitude: number,
    ) => Promise<void>;
    getDataByCityName?: (city: string) => void;
    fahrenheitConvertion?: () => void;
    celciusConvertion?: () => void;
}

interface Prueba {
    data: currentWeather;
    errorMsg: string;
    statusPermission: boolean;
}
interface Response {
    type: string;
    payload: Prueba;
}

interface DataLatAndLong {
    latitude: number;
    longitude: number;
}

interface DataResponseWeather {
    data: DataLatAndLong | null;
    errorMsg: string;
    statusPermission: boolean;
}

export type {
    CurrentLocationData,
    DataResponseWeather,
    GeolocationError,
    BtnTemperature,
    currentWeather,
    InitialState,
    ContextProps,
    ResponseData,
    StyleTemp,
    Response,
};

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=SEAPUVXW54DNQAZD2EM98B486

//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/10.1242%2C-68.0709?unitGroup=metric&key=SEAPUVXW54DNQAZD2EM98B486

/*
"latitude": 10.1242,
"longitude": -68.0709,

*/
