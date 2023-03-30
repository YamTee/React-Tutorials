import React from "react";

const MemoComp = ({ name }) => {
    console.log("Memo Component rendered")
    return (
        <div>{name}</div>
    )
}

export default React.memo(MemoComp);