import { CurrentWeather } from "../interface/DataWeather.interface";
import { DataPosition } from "../interface/dataPosition.interface";

const apiKeyWeather = "8360a837b90921597f2af06ebf76fd77";
const apiKeyForecast = "SEAPUVXW54DNQAZD2EM98B486";

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
        //console.log(data);
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
        //console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function currentWeatherByTag(
    city: string,
    code: string,
): Promise<DataPosition> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&units=metric&appid=${apiKeyWeather}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }
        const data = await response.json();
        //console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function forecastWeatherByTag(city: string): Promise<CurrentWeather> {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKeyForecast}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }
        const data = await response.json();
        //console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export {
    forecastWeatherByLatLng,
    currentWeatherByLatLng,
    forecastWeatherByTag,
    currentWeatherByTag,
};
