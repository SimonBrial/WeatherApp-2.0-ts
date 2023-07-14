import React from "react";
import { LiaLocationArrowSolid } from "react-icons/lia";
import { windDirectionCalc } from "../../../utils/windDirectionCalc";

interface WindValues {
    windSpeed: number;
    degrees: number;
    windUnit: boolean;
}

const Wind: React.FC<WindValues> = ({
    windSpeed,
    windUnit,
    degrees,
}): JSX.Element => {
    const { degRotate, direction } = windDirectionCalc(degrees);

    // TODO: hay que recordar que se debe realizar la conversin de los valores segun sea el cambio de unidad.

    return (
        <article className="container-daily-item">
            <div className="wind">
                <h2>Wind status</h2>
                <div className="container-unit-wind">
                    <p>
                        {windSpeed} <span>{windUnit ? "mph" : "m/s"}</span>
                    </p>
                </div>
                <div className="container-wind-direction">
                    <div className="container-wind">
                        <span className="wind-direction" style={{transform: `rotate(${degRotate}deg)`}}>
                            <LiaLocationArrowSolid />
                        </span>
                    </div>
                    <p>{direction}</p>
                </div>
            </div>
        </article>
    );
};

export default Wind;
