import React from "react";
import { BtnTemp } from "../../buttons";
import { TbTemperatureFahrenheit, TbTemperatureCelsius } from "react-icons/tb";
import { useContext } from "react";
import { AppContext } from "../../../context";
import { ContextProps } from "../../../interface/interface";

const TempBtnContainer: React.FC = (): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { fahrenheitConvertion, celciusConvertion } =
        globalContext as ContextProps;
    return (
        <div className="container-btn-temp">
            <BtnTemp
                TempUnit={<TbTemperatureFahrenheit />}
                convertionUnit={
                    fahrenheitConvertion
                        ? fahrenheitConvertion
                        : () => console.log("undefined")
                }
            />
            <BtnTemp
                TempUnit={<TbTemperatureCelsius />}
                convertionUnit={
                    celciusConvertion
                        ? celciusConvertion
                        : () => console.log("undefined")
                }
            />
        </div>
    );
};

export default TempBtnContainer;
