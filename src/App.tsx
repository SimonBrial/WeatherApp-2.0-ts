/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { Container } from "./components/container";
import { CurrentWeatherContainer } from "./components/currentWeather";
import "./index.scss";
import { AppContext, AppState } from "./context/index";
import { ContextProps } from "./interface/interface";
import { currentLocation } from "./utils/currentLocation";
import useLatAndLonLocation from "./hooks/useLatAndLonLocation";

function App(): JSX.Element {
    const globalContext = useContext(AppContext);
    const { getDataByLatLng, forecast, currentWeather } =
        globalContext as ContextProps;

    //console.log(currentWeather);
    //const weather = useLatAndLonLocation();
    //console.log(forecast);

    //const [datos, setDatos] = useState<any>(null);
    useEffect(() => {
        currentLocation()
            .then((response) =>
                getDataByLatLng(
                    response.coords.latitude,
                    response.coords.longitude,
                ),
            )
            .catch((error) => console.log(error));
    }, []);
    //console.log(weather)
    //console.log(currentWeather);

    return (
        <div className="container-app">
            <CurrentWeatherContainer />
            <Container />
        </div>
    );
}

export default App;
