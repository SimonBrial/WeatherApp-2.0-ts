import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { ContextProps, CurrentWeatherData, DataContextHook } from "../interface/interface";

const useDataContext = (): DataContextHook => {
    const globalContext = useContext(AppContext);
    const { currentWeather, forecast } = globalContext as ContextProps;

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
            currentWeather.statusPermission == true &&
            forecast !== undefined
        ) {
            setStatusData(currentWeather.statusPermission);
            const { weather, main, sys, name, visibility, wind } =
                currentWeather.data;
            const { data } = forecast;
            setCurrent({
                weather: weather,
                main: main,
                sys: sys,
                name: name,
                visibility: visibility,
                wind: wind,
                forecastdata: data.slice(1, 6),
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentWeather]);

    return { current, statusData };
};

export default useDataContext;
