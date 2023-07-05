import React from "react";
import { Card, TempBtnContainer, DailyWeatherContainer } from "..";

const ForecastContainer: React.FC = (): JSX.Element => {
    return (
        <main className="container-forecast">
            <TempBtnContainer />
            <div className="container-card">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <DailyWeatherContainer />
        </main>
    );
};

export default ForecastContainer;
