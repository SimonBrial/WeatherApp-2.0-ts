import { BtnTemperature } from "../../interface/interface";

const BtnTemp: React.FC<BtnTemperature> = ({
    convertionUnit,
    TempUnit,
}): JSX.Element => {
    return (
        <div className="container-button-temp-location">
            <button className="front-btn" onClick={convertionUnit}>
                <span>{TempUnit}</span>
            </button>
            <div className="back-btn"></div>
        </div>
    );
};

export default BtnTemp;
