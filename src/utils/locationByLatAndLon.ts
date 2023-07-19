import { LocationData } from "../interface/DataWeather.interface";

async function locationByLatAndLon(
    lat: number,
    lon: number,
): Promise<LocationData> {
    const apiKeyWeather = "8360a837b90921597f2af06ebf76fd77";
    const apiKeyForecast = "SEAPUVXW54DNQAZD2EM98B486";

    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeyWeather}`;
    const urlForecast = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?key=${apiKeyForecast}`;

    try {
        const responseWeather = await fetch(urlWeather);
        const responseForecast = await fetch(urlForecast);
        if (!responseWeather.ok) {
            throw new Error("Error HTTP: " + responseWeather.status);
        }
        const dataWeather = await responseWeather.json();
        const dataForecast = await responseForecast.json();
            const { days } = dataForecast;
        
        return { dataWeather, dataForecast: days  };

    } catch (err) {
        console.log(err);
        throw err;
    }
}

export { locationByLatAndLon };
