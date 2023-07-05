import React from "react";
import { Air, Humidity, Visibility, Wind } from "..";

const DailyWeatherContainer: React.FC = (): JSX.Element => {
    return (
        <section className="container-daily-weather">
            <h1>Today’s Hightlights</h1>
            <div className="container-daily">
                <Wind />
                <Humidity />
                <Visibility />
                <Air />
            </div>
        </section>
    );
};

export default DailyWeatherContainer;
