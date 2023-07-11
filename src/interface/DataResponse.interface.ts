import { Day } from "./DataWeather.interface";
import { DataPosition } from "./dataPosition.interface";

interface CurrentWeatherResponse {
    data: DataPosition;
    errorMsg: string;
    statusPermission: boolean;
}

interface ForecastData {
    data: Day[];
    errorMsg: string;
    statusPermission: boolean;
}

export type { CurrentWeatherResponse, ForecastData };
