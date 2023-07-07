import { ReactNode } from "react";
// ----------------------------------
interface CurrentWeather {
    queryCost: number;
    latitude: number;
    longitude: number;
    resolvedAddress: string;
    address: string;
    timezone: string;
    tzoffset: number;
    description: string;
    days: Day[];
    alerts: unknown[];
    stations: Stations;
    currentConditions: CurrentConditions;
}

interface Day {
    datetime: string;
    datetimeEpoch: number;
    tempmax: number;
    tempmin: number;
    temp: number;
    feelslikemax: number;
    feelslikemin: number;
    feelslike: number;
    dew: number;
    humidity: number;
    precip: number;
    precipprob: number;
    precipcover: number;
    preciptype: string[] | undefined;
    snow: number;
    snowdepth: number;
    windgust: number;
    windspeed: number;
    winddir: number;
    pressure: number;
    cloudcover: number;
    visibility: number;
    solarradiation: number;
    solarenergy: number;
    uvindex: number;
    severerisk: number;
    sunrise: string;
    sunriseEpoch: number;
    sunset: string;
    sunsetEpoch: number;
    moonphase: number;
    conditions: string;
    description: string;
    icon: string;
    stations?: string[] | null;
    source: string;
    hours: Hour[];
}

interface Hour {
    datetime: string;
    datetimeEpoch: number;
    temp: number;
    feelslike: number;
    humidity: number;
    dew: number;
    precip: number;
    precipprob: number;
    snow: number;
    snowdepth: number;
    preciptype?: string[] | null;
    windgust: number;
    windspeed: number;
    winddir: number;
    pressure: number;
    visibility: number;
    cloudcover: number;
    solarradiation: number;
    solarenergy: number;
    uvindex: number;
    severerisk: number;
    conditions: string;
    icon: string;
    stations?: string[] | null;
    source: string;
}

interface Stations {
    SVVA: Svva;
    SVJM: Svjm;
    SVBS: Svbs;
}

interface Svva {
    distance: number;
    latitude: number;
    longitude: number;
    useCount: number;
    id: string;
    name: string;
    quality: number;
    contribution: number;
}

interface Svjm {
    distance: number;
    latitude: number;
    longitude: number;
    useCount: number;
    id: string;
    name: string;
    quality: number;
    contribution: number;
}

interface Svbs {
    distance: number;
    latitude: number;
    longitude: number;
    useCount: number;
    id: string;
    name: string;
    quality: number;
    contribution: number;
}

interface CurrentConditions {
    datetime: string;
    datetimeEpoch: number;
    temp: number;
    feelslike: number;
    humidity: number;
    dew: number;
    precip: number;
    precipprob: number;
    snow: number;
    snowdepth: number;
    preciptype: unknown;
    windgust: unknown;
    windspeed: number;
    winddir: number;
    pressure: number;
    visibility: number;
    cloudcover: number;
    solarradiation: number;
    solarenergy: number;
    uvindex: number;
    conditions: string;
    icon: string;
    stations: string[];
    source: string;
    sunrise: string;
    sunriseEpoch: number;
    sunset: string;
    sunsetEpoch: number;
    moonphase: number;
}

// ----------------------------------

interface InitialState {
    geolocation: CurrentLocationData;
    currentWeather: CurrentConditions;
    forecast: Day[];
    hightlight: CurrentConditions;
    celcius: boolean;
    fahrenheit: boolean;
    dataCurrentLocation: CurrentConditions;
    dataSpecifyLocation: CurrentConditions;
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
}

interface ContextProps {
    geolocation: CurrentLocationData;
    currentWeather: CurrentConditions;
    forecast: Day[];
    hightlight: CurrentConditions;
    celcius: boolean;
    fahrenheit: boolean;
    dataCurrentLocation: CurrentConditions;
    dataSpecifyLocation: CurrentConditions;
}

interface DataResponseWeather extends CurrentLocationData {
    data: CurrentLocationData;
    errorMsg: string;
}

export type {
    CurrentLocationData,
    DataResponseWeather,
    GeolocationError,
    BtnTemperature,
    currentWeather,
    InitialState,
    ContextProps,
    StyleTemp,
};
