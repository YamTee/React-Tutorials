import React from "react";

const FunctionClick = () => {

    const clicked = () => alert("Function click happened!")

    return (
        <div>
            <button onClick={clicked}>Function Click Me</button>
        </div>
    )
}

export default FunctionClick