import { ReactNode } from "react";

interface InitialState {
    currentWeather: [];
    forecast: [];
    hightlight: [];
    celcius: boolean;
    fahrenheit: boolean;
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
    dateCurrent: string
}

interface BtnTemperature {
    TempUnit: ReactNode;
}

export type { InitialState, BtnTemperature };
