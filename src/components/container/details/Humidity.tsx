import React from "react";

const Humidity: React.FC = (): JSX.Element => {
    return (
        <article className="container-daily-item">
            <div className="humidity">
                <h2>Humidity</h2>
                <div className="container-unit-humidity">
                    <p>
                        84<span>%</span>
                    </p>
                </div>
                <div className="container-bar">
                    <div className="container-num">
                        <p>0</p>
                        <p>50</p>
                        <p>100</p>
                    </div>
                    <div className="bar">
                        <div className="front-bar"></div>
                        <div className="back-bar"></div>
                    </div>
                    <p>%</p>
                </div>
            </div>
        </article>
    );
};

export default Humidity;
