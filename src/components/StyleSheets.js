import React from "react";
import "./myStyles.css"

const StyleSheets = ({ colorNeeded }) => {
    let styleName = colorNeeded ? "orange" : "";
    return <h1 className={`${styleName} font-xl`}>Styled text</h1>;
}

export default StyleSheets; 