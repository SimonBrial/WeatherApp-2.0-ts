import React from "react";
import { Air, Humidity, Visibility, Wind } from "..";
import useDataContext from "../../../hooks/useDataContext";

const DailyWeatherContainer: React.FC = (): JSX.Element => {
    const { current, statusData } = useDataContext();
    //console.log(current);

    return (
        <section className="container-daily-weather">
            <h1>Today’s Hightlights</h1>
            <div className="container-daily">
                <Wind
                    windUnit={statusData ? false : true}
                    windSpeed={statusData ? current.wind.speed : 7}
                    degrees={statusData ? current.wind.deg : 7}
                />
                <Humidity porcentage={statusData ? current.main.humidity : 84}/>
                <Visibility distance={statusData ? current.visibility : 6.4} distanceUnit={true}/>
                <Air airPressure={statusData ? current.main.pressure : 998} />
            </div>
        </section>
    );
};

export default DailyWeatherContainer;
