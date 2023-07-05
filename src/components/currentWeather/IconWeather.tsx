import React from "react";

const IconWeather: React.FC = (): JSX.Element => {
    return (
        <div className="container-img">
            <div className="front-img">
                <img src="img/Clear.png" alt="Current Weather" />
            </div>
            <div className="back-img">
                <img src="img/Cloud-background.png" alt="Background Clouds" />
            </div>
        </div>
    );
};

export default IconWeather;
