import React from "react";
import { MdMyLocation } from "react-icons/md";

const BtnCurrentLocation: React.FC = (): JSX.Element => {
    return (
        <div className="container-button-temp-location">
            <button className="front-btn">
                <span>
                    <MdMyLocation />
                </span>
            </button>
            <div className="back-btn"></div>
        </div>
    );
};

export default BtnCurrentLocation;
