/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useCurrentLocation } from ".";
import { locationByLatAndLon } from "../utils/locationByLatAndLon";
import { DataPosition } from "../interface/dataPosition.interface";
import { LocationData } from "../interface/DataWeather.interface";
const useLatAndLonLocation = (): DataPosition | LocationData => {
    const initialStatePosition: DataPosition = {
        base: "stations",
        clouds: { all: 0 },
        cod: 0,
        coord: { lon: 0, lat: 0 },
        dt: 0,
        id: 0,
        main: {
            feels_like: 0,
            grnd_level: 0,
            humidity: 0,
            pressure: 0,
            sea_level: 0,
            temp: 30,
            temp_max: 0,
            temp_min: 0,
        },
        name: "Simon",
        sys: {
            country: "VE",
            id: 0,
            sunrise: 0,
            sunset: 16808943469,
            type: 1,
        },
        timezone: 0,
        visibility: 0,
        weather: [
            {
                id: 0,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d",
            },
        ],
        wind: { speed: 1.93, deg: 149, gust: 3.56 },
    };
    const [fullData, setFullData] = useState<DataPosition | LocationData>(
        initialStatePosition,
    );
    const response = useCurrentLocation();
    if (!response) {
        console.log("No es posible determinar la posicion actual del usuario");
    }
    const { data, statusPermission } = response;
    useEffect(() => {
        if (data) {
            const { latitude, longitude } = data;
            locationByLatAndLon(latitude, longitude)
                .then((responseData) => setFullData(responseData))
                .catch((err) => console.log(err));
        }
    }, [statusPermission]);
    return fullData;
};
export default useLatAndLonLocation;
