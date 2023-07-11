import React from "react";
import { MdLocationPin } from "react-icons/md";

interface DetailsValue {
    cityCurrent: string;
}

const Details: React.FC<DetailsValue> = ({cityCurrent}): JSX.Element => {
    //console.log(cityCurrent)
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
                <p>{(cityCurrent !== "") ? cityCurrent : "CURRENT LOCATION"}</p>
            </div>
        </div>
    );
};

export default Details;
