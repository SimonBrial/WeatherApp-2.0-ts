import { useState, useEffect, useContext } from "react";
import { ContextProps, CurrentWeatherData } from "../interface/interface";
import { AppContext } from "../context";
const useDataByCity = (cityAndCode: string) => {
    const globalContext = useContext(AppContext);
    const { getDataByCityName} = globalContext as ContextProps;
    const [responseData] = useState<CurrentWeatherData>({
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
    useEffect(() => {
        if(cityAndCode) {
            getDataByCityName(cityAndCode)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            console.log("Inserte la region en la que desea saber el clima")
        }
    }, [cityAndCode]);
    return responseData;
};
export default useDataByCity;
