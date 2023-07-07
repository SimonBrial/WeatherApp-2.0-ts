import { useEffect, useState } from "react";
import { getCurrentLocation } from "../utils/getCurrentLocation";
import { CurrentLocationData, DataResponseWeather  } from "../interface/interface";

const useCurrentLocation = (): DataResponseWeather | unknown => {
    const [data, setData] = useState<CurrentLocationData | unknown>({
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

    const errorMsg = "Geolocation is not supported by your browser";

    useEffect(() => {
        getCurrentLocation()
            .then((location) => setData(location))
            .catch((err) =>
                console.log(
                    "Hay un error y no se puede mostrar la informacion de la posicion actual",
                    err,
                ),
            );
    }, []);

    if (!data) {
        return {
            data: null,
            errorMsg: errorMsg
        };
    } else {
        return {
            data: data,
            errorMsg: null
        };
    }
};

export default useCurrentLocation;
