import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { ContextProps } from "../interface/interface";
import {
    Main,
    Sys,
    Weather as WeatherInterface,
    Wind,
} from "../interface/dataPosition.interface";
import { Day } from "../interface/DataWeather.interface";

interface CurrentWeatherData {
    weather: WeatherInterface[];
    main: Main;
    sys: Sys;
    name: string;
    visibility: number;
    wind: Wind;
    forecastdata: Day[];
}

interface DataContextHook {
    current: CurrentWeatherData;
    statusData: boolean;
}

const useDataContext = (): DataContextHook => {
    const globalContext = useContext(AppContext);
    const { currentWeather, forecast } = globalContext as ContextProps;
    /* console.log(currentWeather);
    console.log(forecast); */

    const [current, setCurrent] = useState<CurrentWeatherData>({
        weather: [
            { id: 0, main: "simon", description: "few simon", icon: "02n" },
        ],
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
            grnd_level: 0,
            sea_level: 0,
        },
        sys: {
            type: 0,
            id: 0,
            country: "",
            sunrise: 0,
            sunset: 0,
        },
        name: "",
        visibility: 10000,
        wind: { speed: 4.72, deg: 195, gust: 7.45 },
        forecastdata: [],
    });
    const [statusData, setStatusData] = useState<boolean>(false);

    useEffect(() => {
        if (
            currentWeather !== undefined &&
            forecast !== undefined &&
            currentWeather.statusPermission == true
        ) {
            setStatusData(true);
            const { weather, main, sys, name, visibility, wind } =
                currentWeather.data;
            const {data} = forecast;
            setCurrent({
                weather: weather,
                main: main,
                sys: sys,
                name: name,
                visibility: visibility,
                wind: wind,
                forecastdata: data.slice(0, 5)
            });
        }
    }, [currentWeather]);

    return { current, statusData };
};

export default useDataContext;
