import React from "react";
import { MdLocationPin } from "react-icons/md";
import { getDate } from "../../utils";

interface DetailsValue {
    cityCurrent: string;
}

const Details: React.FC<DetailsValue> = ({cityCurrent}): JSX.Element => {
    const nowDate = getDate();
    return (
        <div className="container-details">
            <div className="date">
                <p>Today</p>
                <span>-</span>
                <p>{nowDate}</p>
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
