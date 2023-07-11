import { useEffect, useState } from "react";
import { currentLocation } from "../utils/currentLocation";
import errorHandle from "../utils/errorHandle";
import {
    CurrentLocationData,
    DataResponseWeather,
} from "../interface/interface";

const useCurrentLocation = (): DataResponseWeather => {
    const [data, setData] = useState<CurrentLocationData>({
        coords: {
            accuracy: 0,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude: 0,
            longitude: 0,
            speed: null,
        },
        timestamp: 0,
    });
    useEffect(() => {
        currentLocation()
            .then((location) => setData(location as CurrentLocationData))
            .catch((err) => console.log(errorHandle("current_position"), err));
    }, []);
    if (!data) {
        return {
            data: null,
            errorMsg: errorHandle("Geolocation_error"),
            statusPermission: false,
        };
    } else {
        const { latitude, longitude } = data.coords;
        if (latitude == 0 && longitude == 0) {
            const errorCode: string = errorHandle("espera_permisos");
            return {
                data: { latitude: latitude, longitude: longitude },
                errorMsg: errorCode,
                statusPermission: false,
            };
        } else {
            const errorCode: string = errorHandle("code_200");
            return {
                data: { latitude: latitude, longitude: longitude },
                errorMsg: errorCode,
                statusPermission: true,
            };
        }
    }
};
export default useCurrentLocation;
