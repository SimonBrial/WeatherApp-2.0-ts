//import { useState, useEffect } from "react";
import { Container } from "./components/container";
import { CurrentWeatherContainer } from "./components/currentWeather";
import "./index.scss";
import useCurrentLocation from "./hooks/useCurrentLocation";

function App(): JSX.Element {

    const weatherData = useCurrentLocation();
    console.log(weatherData)
    return (
        <div className="container-app">
            <CurrentWeatherContainer />
            <Container />
        </div>
    );
}

export default App;
