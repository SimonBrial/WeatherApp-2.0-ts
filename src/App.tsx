/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import Layout from "./components/Layout";
import { CurrentWeatherContainer } from "./components/currentWeather";
import "./index.scss";
import { AppContext } from "./context/index";
import { ContextProps } from "./interface/interface";
import { currentLocation } from "./utils/currentLocation";

function App(): JSX.Element {
    const globalContext = useContext(AppContext);
    const { getDataByLatLng } = globalContext as ContextProps;

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

    return (
        <div>
            <Layout />
        </div>
    );
}

export default App;
