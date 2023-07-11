import { CurrentWeather } from "../interface/DataWeather.interface";
import { DataPosition } from "../interface/dataPosition.interface";

const apiKeyWeather = import.meta.env.VITE_API_KEY_WEATHER;
const apiKeyForecast = import.meta.env.VITE_API_KEY_FORECAST;

async function currentWeatherByLatLng(
    latitude: number,
    longitude: number,
): Promise<DataPosition> {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKeyWeather}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
async function forecastWeatherByLatLng(
    latitude: number,
    longitude: number,
): Promise<CurrentWeather> {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${apiKeyForecast}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function currentWeatherByTag(city: string) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKeyForecast}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

/* async function forecastWeatherByTag(city:string) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKeyForecast}`;
} */

export {
    forecastWeatherByLatLng,
    currentWeatherByLatLng,
    //forecastWeatherByTag,
    currentWeatherByTag,
};
