import React from "react";
import { BtnSearch as SearchI } from "../../interface/interface";

const BtnSearch: React.FC<SearchI> = ({ toShow }): JSX.Element => {
    return (
        <div className="container-button">
            <button className="front-btn" onClick={toShow}>
                <p>Search for places</p>
            </button>
            <div className="back-btn"></div>
        </div>
    );
};

export default BtnSearch;
