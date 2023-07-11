import React from "react";
import { Card, TempBtnContainer, DailyWeatherContainer } from "..";
import useDataContext from "../../../hooks/useDataContext";

const ForecastContainer: React.FC = (): JSX.Element => {
    const { current } = useDataContext();
    console.log(current.forecastdata);

    return (
        <main className="container-forecast">
            <TempBtnContainer />
            <div className="container-card">
                <ul>
                    {current.forecastdata.map((data, index) => {
                        const { tempmax, tempmin } = data;
                        return (
                            <li key={index}>
                                <Card tempMax={tempmax} tempMin={tempmin} />
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
