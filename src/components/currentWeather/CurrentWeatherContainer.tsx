import React, { useContext } from "react";
import { BtnCurrentLocation, BtnSearch } from "../buttons";
import { Details, IconWeather, Temp, Weather } from "./index";
import useDataContext from "../../hooks/useDataContext";
import { ContextProps } from "../../interface/interface";
import { AppContext } from "../../context";
import { convertionToFarenheit } from "../../utils/convertions";

const CurrentWeatherContainer: React.FC = (): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { appUnits } = globalContext as ContextProps;
    const { current, statusData } = useDataContext();
    const tempValue = convertionToFarenheit(current.main.temp);
    const tempFormated =current.main.temp.toFixed(1);
    return (
        <aside className="container-current-weather">
            <div className="aside-buttons">
                <BtnSearch />
                <BtnCurrentLocation />
            </div>
            <div className="weather-info">
                <IconWeather iconId={current.weather[0].icon} />
                <Temp
                    tempSize="6.5"
                    unitSize="3.5"
                    tempUnit={appUnits}
                    tempValue={appUnits ? parseFloat(tempValue) : parseFloat(tempFormated)}
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
