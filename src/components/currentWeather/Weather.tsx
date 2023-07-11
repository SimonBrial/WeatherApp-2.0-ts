import React from "react";

interface WeatherComponent {
    weatherValue: string;
}

const Weather: React.FC<WeatherComponent> = ({ weatherValue }): JSX.Element => {
    //console.log(weatherValue);
    return (
        <div className="container-weather">
            <h1>{weatherValue}</h1>
        </div>
    );
};

export default Weather;
