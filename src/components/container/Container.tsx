import React from "react";
import { Footer, ForecastContainer } from ".";

const Container: React.FC = (): JSX.Element => {
    return (
        <div className="container-main">
            <ForecastContainer />
            {/* <Footer /> */}
        </div>
    );
};

export default Container;
