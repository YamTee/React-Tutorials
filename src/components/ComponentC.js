import React from "react";
import { UserConsumer } from "./userContext";

const ComponentC = () => {
    
    return (<UserConsumer>
        {
            (username) => {
                return <div>{username}</div>
            }
        }
    </UserConsumer>)
}

export default ComponentC;