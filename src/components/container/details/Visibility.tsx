import React from "react";

const Visibility: React.FC = (): JSX.Element => {
    return (
        <article className="container-daily-item">
            <div className="visibility">
                <h2>Visibility</h2>
                <div className="container-unit-visibility">
                    <p>
                        6,4 <span>miles</span>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Visibility;
