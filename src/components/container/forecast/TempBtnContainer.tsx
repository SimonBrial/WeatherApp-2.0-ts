import React from "react";
import { BtnTemp } from "../../buttons";
import { TbTemperatureFahrenheit, TbTemperatureCelsius } from "react-icons/tb";

const TempBtnContainer: React.FC = (): JSX.Element => {
    return (
        <div className="container-btn-temp">
            <BtnTemp TempUnit={<TbTemperatureFahrenheit />} />
            <BtnTemp TempUnit={<TbTemperatureCelsius />} />
        </div>
    );
};

export default TempBtnContainer;
