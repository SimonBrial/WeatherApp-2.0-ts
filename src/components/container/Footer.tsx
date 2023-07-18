import React from "react";
import { DevIcon } from "../../icons";

const Footer: React.FC = (): JSX.Element => {
    return (
        <footer>
            <p>
                Created by <span>Simon Briceño</span> - devChallenges.io
            </p>
            <span>
                <DevIcon />
            </span>
        </footer>
    );
};

export default Footer;
