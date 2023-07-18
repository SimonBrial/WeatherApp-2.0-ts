import React, { useContext } from "react";
import { Card, TempBtnContainer, DailyWeatherContainer } from "..";
import { useDataContext } from "../../../hooks";
import { ContextProps } from "../../../interface/interface";
import { AppContext } from "../../../context";

const ForecastContainer: React.FC = (): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { appUnits } = globalContext as ContextProps;
    const { current } = useDataContext();

    return (
        <main className="container-forecast">
            <TempBtnContainer />
            <div className="container-card">
                <ul>
                    {current.forecastdata.map((data, index) => {
                        const { tempmax, tempmin, datetime } = data;
                        return (
                            <li key={index}>
                                <Card
                                    tempMax={tempmax}
                                    tempMin={tempmin}
                                    date={datetime}
                                    unit={appUnits}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <DailyWeatherContainer />
        </main>
    );
};

export default ForecastContainer;
