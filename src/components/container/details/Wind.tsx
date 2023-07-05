import React from "react";
import { LiaLocationArrowSolid } from "react-icons/lia";

const Wind: React.FC = (): JSX.Element => {
    return (
        <article className="container-daily-item">
            <div className="wind">
                <h2>Wind status</h2>
                <div className="container-unit-wind">
                    <p>
                        7 <span>mph</span>
                    </p>
                </div>
                <div className="container-wind-direction">
                    <div className="container-wind">
                        <span className="wind-direction">
                            <LiaLocationArrowSolid />
                        </span>
                    </div>
                        <p>WSW</p>
                </div>
            </div>
        </article>
    );
};

export default Wind;
