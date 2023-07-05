import React from "react";

const Air: React.FC = (): JSX.Element => {
    return (
        <article className="container-daily-item">
            <div className="air">
                <h2>Air Pressure</h2>
                <div className="container-unit-air">
                    <p>
                        998 <span>mb</span>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Air;
