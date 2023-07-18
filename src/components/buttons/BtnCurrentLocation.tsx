import React, { useContext } from "react";
import { MdMyLocation } from "react-icons/md";
import { AppContext } from "../../context";
import { ContextProps } from "../../interface/interface";

const BtnCurrentLocation: React.FC = (): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { getLocation } = globalContext as ContextProps;
    
    return (
        <div className="container-button-temp-location">
            <button className="front-btn" onClick={getLocation}>
                <span>
                    <MdMyLocation />
                </span>
            </button>
            <div className="back-btn"></div>
        </div>
    );
};

export default BtnCurrentLocation;
