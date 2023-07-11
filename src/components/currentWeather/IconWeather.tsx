import React from "react";
import {
    WiStormShowers,
    WiDaySunny,
    WiShowers,
    WiCloudy,
    WiCloud,
    WiRain,
    WiHail,
    WiSnow,
} from "react-icons/wi";

interface IconWeatherId {
    iconId: React.ReactNode;
}
type iconWeather = {
    code: string;
    icon: React.ReactNode;
};

const IconWeather: React.FC<IconWeatherId> = ({ iconId }): JSX.Element => {
    const weatherIcon = [
        { code: "01d", icon: <WiDaySunny /> },
        { code: "01n", icon: <WiDaySunny /> },
        { code: "02d", icon: <WiCloud /> },
        { code: "02n", icon: <WiCloud /> },
        { code: "03d", icon: <WiCloudy /> },
        { code: "03n", icon: <WiCloudy /> },
        { code: "04d", icon: <WiCloudy /> },
        { code: "04n", icon: <WiCloudy /> },
        { code: "09d", icon: <WiRain /> },
        { code: "09n", icon: <WiRain /> },
        { code: "10d", icon: <WiShowers /> },
        { code: "10n", icon: <WiShowers /> },
        { code: "11d", icon: <WiStormShowers /> },
        { code: "11n", icon: <WiStormShowers /> },
        { code: "13d", icon: <WiSnow /> },
        { code: "13n", icon: <WiSnow /> },
        { code: "50d", icon: <WiHail /> },
        { code: "50n", icon: <WiHail /> },
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
