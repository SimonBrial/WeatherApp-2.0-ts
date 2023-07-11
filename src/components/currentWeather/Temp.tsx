import React from "react";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
//TbTemperatureFahrenheit,
import { StyleTemp } from "../../interface/interface";

const Temp: React.FC<StyleTemp> = ({
    tempSize,
    unitSize,
    tempColor,
    tempUnit,
    tempValue,
}): JSX.Element => {
    //console.log(tempValue, tempUnit);
    return (
        <div className="container-temp">
            <p style={{ fontSize: `${tempSize}`, color: `${tempColor}` }}>
                {tempValue}
            </p>
            <span style={{ fontSize: `${unitSize}`, color: `${tempColor}` }}>
                {tempUnit ? (
                    <TbTemperatureCelsius />
                ) : (
                    <TbTemperatureFahrenheit />
                )}
            </span>
        </div>
    );
};

export default Temp;
