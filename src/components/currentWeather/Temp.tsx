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
    //console.log(tempUnit);
    return (
        <div className="container-temp">
            <p
                style={{
                    fontSize: `${tempSize}rem`,
                    color: `${tempColor}`,
                }}
            >
                {tempValue}
            </p>
            <span style={{ fontSize: `${unitSize}rem`, color: `${tempColor}` }}>
                {tempUnit ? (
                    <TbTemperatureFahrenheit />
                ) : (
                    <TbTemperatureCelsius />
                )}
            </span>
        </div>
    );
};

export default Temp;
