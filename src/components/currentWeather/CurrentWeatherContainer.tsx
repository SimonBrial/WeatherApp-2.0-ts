import React from "react";
import { BtnCurrentLocation, BtnSearch } from "../buttons";
import { Details, IconWeather, Temp, Weather } from "./index";
import useDataContext from "../../hooks/useDataContext";

const CurrentWeatherContainer: React.FC = (): JSX.Element => {
    const { current, statusData } = useDataContext();

    return (
        <aside className="container-current-weather">
            <div className="aside-buttons">
                <BtnSearch />
                <BtnCurrentLocation />
            </div>
            <div className="weather-info">
                <IconWeather iconId={current.weather[0].icon} />
                <Temp
                    tempSize="6.5rem"
                    unitSize="3.5rem"
                    tempUnit={true}
                    tempValue={statusData ? current.main.temp : 15}
                />
                <Weather
                    weatherValue={
                        statusData ? current.weather[0].main : "Shower"
                    }
                />
                <Details cityCurrent={statusData ? current.name : "Current"} />
            </div>
        </aside>
    );
};

export default CurrentWeatherContainer;
