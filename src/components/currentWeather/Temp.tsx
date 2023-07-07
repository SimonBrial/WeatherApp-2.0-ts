import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
//TbTemperatureFahrenheit,
import { StyleTemp } from "../../interface/interface";

const Temp: React.FC<StyleTemp> = ({
    tempSize,
    unitSize,
    tempColor,
}): JSX.Element => {
    return (
        <div className="container-temp">
            <p style={{ fontSize: `${tempSize}`, color: `${tempColor}` }}>15</p>
            <span style={{ fontSize: `${unitSize}`, color: `${tempColor}` }}>
                <TbTemperatureCelsius />
            </span>
        </div>
    );
};

export default Temp;
