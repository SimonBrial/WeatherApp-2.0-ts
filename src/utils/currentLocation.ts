import { CurrentLocationData, GeolocationError } from "../interface/interface";

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function error(error: GeolocationError): void {
    return console.log("There is an Error with your current location", error);
}

function currentLocation(): Promise<CurrentLocationData | GeolocationPosition> {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            return reject(
                new Error("Geolocation is not supported by your browser"),
            );
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve(position);
                },
                (err) => {
                    reject(error(err));
                },
                options,
            );
        }
    });
}

export { currentLocation };
