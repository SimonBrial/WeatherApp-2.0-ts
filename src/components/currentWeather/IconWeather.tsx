import React from "react";
import {
    Thunderstorm,
    HeavyCloud,
    LightCloud,
    LightRain,
    HeavyRain,
    Clear,
    Hail,
    Snow,
} from "../../icons/index";

interface IconWeatherId {
    iconId: React.ReactNode;
}
type iconWeather = {
    code: string;
    icon: React.ReactNode;
};

const IconWeather: React.FC<IconWeatherId> = ({ iconId }): JSX.Element => {

    /**
     * 01d.png 	clear sky --------> Clear.png 
     * 02d.png 	few clouds -------> LightCloud.png 
     * 03d.png 	scattered clouds -> HeavyCloud.png 
     * 04d.png 	broken clouds ----> HeavyCloud.png 
     * 09d.png 	shower rain ------> HeavyRain.png 
     * 10d.png 	rain -------------> LightRain.png 
     * 11d.png 	thunderstorm -----> Thunderstorm.png 
     * 13d.png 	snow -------------> Snow.png 
     * 50d.png  mist -------------> Hail.png 
     */
    const weatherIcon = [
        { code: "01d", icon: <Clear /> },
        { code: "01n", icon: <Clear /> },
        { code: "02d", icon: <LightCloud /> },
        { code: "02n", icon: <LightCloud /> },
        { code: "03d", icon: <HeavyCloud /> },
        { code: "03n", icon: <HeavyCloud /> },
        { code: "04d", icon: <HeavyCloud /> },
        { code: "04n", icon: <HeavyCloud /> },
        { code: "09d", icon: <HeavyRain /> },
        { code: "09n", icon: <HeavyRain /> },
        { code: "10d", icon: <LightRain /> },
        { code: "10n", icon: <LightRain /> },
        { code: "11d", icon: <Thunderstorm /> },
        { code: "11n", icon: <Thunderstorm /> },
        { code: "13d", icon: <Snow /> },
        { code: "13n", icon: <Snow /> },
        { code: "50d", icon: <Hail /> },
        { code: "50n", icon: <Hail /> },
    ];

    const iconFound: iconWeather[] = weatherIcon.filter(
        (iconToFound: iconWeather) => iconToFound.code === iconId,
    );

    return (
        <div className="container-img">
            <div className="front-img">
                <span>{iconFound[0].icon}</span>
            </div>
            <div className="back-img">
                <img src="img/Cloud-background.png" alt="Background Clouds" />
            </div>
        </div>
    );
};

export default IconWeather;
