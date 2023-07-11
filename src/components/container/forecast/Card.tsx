import React from "react";
import { Temp } from "../../currentWeather";

interface CardValues {
    tempMax: number;
    tempMin: number;
}

const Card: React.FC<CardValues> = ({tempMax, tempMin}): JSX.Element => {
    return (
        <article className="container-card-item">
            <div className="container-img-date">
                <h2>Tomorrow</h2>
                <img src="img/LightCloud.png" />
            </div>
            <div className="card-temperature">
                <div className="card-temperature-index">
                    <p>MAX</p>
                    <Temp tempSize="1.2rem" unitSize="1rem" tempValue={tempMax} tempUnit={true} />
                </div>
                <div className="card-temperature-index">
                    <p>MIN</p>
                    <Temp tempSize="1.2rem" unitSize="1rem" tempValue={tempMin} tempUnit={true} />
                </div>
            </div>
        </article>
    );
};

export default Card;
