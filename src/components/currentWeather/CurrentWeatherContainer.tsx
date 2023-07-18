import React, { useState, useContext } from "react";
import { BtnCurrentLocation, BtnSearch } from "../buttons";
import { Details, IconWeather, Temp, Weather, Search } from "./index";
import { useDataContext } from "../../hooks";
import { ContextProps } from "../../interface/interface";
import { AppContext } from "../../context";
import { convertionToFarenheit } from "../../utils/convertions";

const CurrentWeatherContainer: React.FC = (): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { appUnits } = globalContext as ContextProps;
    const { current, statusData } = useDataContext();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const tempValue = convertionToFarenheit(current.main.temp);
    const tempFormated = current.main.temp.toFixed(1);

    const isOpenIt = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside className="container-current-weather">
            <div className="aside-buttons">
                <BtnSearch toShow={isOpenIt} show={isOpen} />
                <BtnCurrentLocation />
            </div>
            <div className="weather-info">
                <IconWeather iconId={current.weather[0].icon} />
                <Temp
                    tempSize="6.5"
                    unitSize="3.5"
                    tempUnit={appUnits}
                    tempValue={
                        appUnits
                            ? parseFloat(tempValue)
                            : parseFloat(tempFormated)
                    }
                />
                <Weather
                    weatherValue={
                        statusData ? current.weather[0].main : "Shower"
                    }
                />
                <Details cityCurrent={statusData ? current.name : "Current"} />
            </div>
            {isOpen ? (
                <>
                    <Search toShow={isOpenIt} show={isOpen} />
                </>
            ) : (
                <></>
            )}
        </aside>
    );
};

export default CurrentWeatherContainer;
