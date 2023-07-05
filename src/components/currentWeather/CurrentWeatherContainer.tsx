import React from "react";
import { BtnCurrentLocation, BtnSearch } from "../buttons";
import { Details, IconWeather, Temp, Weather } from "./index";

const CurrentWeatherContainer: React.FC = (): JSX.Element => {
    return (
        <aside className="container-current-weather">
            <div className="aside-buttons">
                <BtnSearch />
                <BtnCurrentLocation />
            </div>
            <div className="weather-info">
                <IconWeather />
                <Temp tempSize="9rem" unitSize="3.5rem"/>
                <Weather />
                <Details />
            </div>
        </aside>
    );
};

export default CurrentWeatherContainer;
