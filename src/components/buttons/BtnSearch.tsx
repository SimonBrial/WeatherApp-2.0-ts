import React from "react";

const BtnSearch: React.FC = (): JSX.Element => {
    return (
        <div className="container-button">
            <button className="front-btn">
                <p>Search for places</p>
            </button>
            <div className="back-btn"></div>
        </div>
    );
};

export default BtnSearch;
