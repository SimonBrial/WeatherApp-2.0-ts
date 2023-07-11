import React from "react";
import { pressure } from "../../../utils/convertions";

interface AirValues {
    airPressure: number;
    airUnit?: boolean;
}

const Air: React.FC<AirValues> = ({ airPressure }): JSX.Element => {
    return (
        <article className="container-daily-item">
            <div className="air">
                <h2>Air Pressure</h2>
                <div className="container-unit-air">
                    <p>
                        {pressure(airPressure)} <span>psi</span>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Air;
