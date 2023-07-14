import React from "react";
import { visibilityConvertion } from "../../../utils/convertions";

interface VisibilityValues {
    distance: number;
    distanceUnit?: boolean;
}

const Visibility: React.FC<VisibilityValues> = ({
    distance,
    distanceUnit,
}): JSX.Element => {
    return (
        <article className="container-daily-item">
            <div className="visibility">
                <h2>Visibility</h2>
                <div className="container-unit-visibility">
                    <p>
                        {visibilityConvertion(distance)}{" "}
                        <span>{distanceUnit ? "miles" : "meters"}</span>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Visibility;
