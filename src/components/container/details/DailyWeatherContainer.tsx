import React, { useContext } from "react";
import { Air, Humidity, Visibility, Wind } from "..";
import { useDataContext } from "../../../hooks";
import { ContextProps } from "../../../interface/interface";
import { AppContext } from "../../../context";

const DailyWeatherContainer: React.FC = (): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { appUnits } = globalContext as ContextProps;
    const { current, statusData } = useDataContext();
    //console.log(current);

    return (
        <section className="container-daily-weather">
            <h1>Today’s Hightlights</h1>
            <div className="container-daily">
                <Wind
                    windUnit={appUnits}
                    windSpeed={statusData ? current.wind.speed : 7}
                    degrees={statusData ? current.wind.deg : 7}
                />
                <Humidity
                    porcentage={statusData ? current.main.humidity : 84}
                />
                <Visibility
                    distance={statusData ? current.visibility : 6.4}
                    distanceUnit={appUnits}
                />
                <Air airPressure={statusData ? current.main.pressure : 998} />
            </div>
        </section>
    );
};

export default DailyWeatherContainer;
