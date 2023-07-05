import { BtnTemperature } from "../../interface/interface";

const BtnTemp: React.FC<BtnTemperature> = ({ TempUnit }): JSX.Element => {
    return (
        <div className="container-button-temp-location">
            <button className="front-btn">
                <span>{TempUnit}</span>
            </button>
            <div className="back-btn"></div>
        </div>
    );
};

export default BtnTemp;
