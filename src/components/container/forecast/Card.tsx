import React from "react";
import { Temp } from "../../currentWeather";
import { getDate } from "../../../utils";
import { convertionToCelcius } from "../../../utils/convertions";

interface CardValues {
    tempMax: number;
    tempMin: number;
    date: string;
    unit: boolean;
}

const Card: React.FC<CardValues> = ({
    tempMax,
    tempMin,
    date,
    unit,
}): JSX.Element => {
    const dateCard = getDate(date);
    const tempMaxTransform = convertionToCelcius(tempMax);
    const tempMinTransform = convertionToCelcius(tempMin);

    return (
        <article className="container-card-item">
            <div className="container-img-date">
                <h2>{dateCard}</h2>
                <img src="img/LightCloud.png" />
            </div>
            <div className="card-temperature">
                <div className="card-temperature-index">
                    <p>MAX</p>
                    <Temp
                        tempSize="1.1"
                        unitSize="1.1"
                        tempValue={unit? tempMax : parseFloat(tempMaxTransform)}
                        tempUnit={unit}
                    />
                </div>
                <div className="card-temperature-index">
                    <p>MIN</p>
                    <Temp
                        tempSize="1.1"
                        unitSize="1.1"
                        tempValue={unit ? tempMin : parseFloat(tempMinTransform)}
                        tempUnit={unit}
                    />
                </div>
            </div>
        </article>
    );
};

export default Card;
