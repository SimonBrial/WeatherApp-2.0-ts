import React from "react";
import { MdLocationPin } from "react-icons/md";

const Details: React.FC = (): JSX.Element => {
    return (
        <div className="container-details">
            <div className="date">
                <p>Today</p>
                <span>-</span>
                <p>Fri. 5 Jun</p>
            </div>
            <div className="location">
                <span>
                    <MdLocationPin />
                </span>
                <p>Tocuyork</p>
            </div>
        </div>
    );
};

export default Details;
