import React from 'react'

// function Greet() {
//     return <h1>Hello Yamtee</h1>
// }

const Greet = (props) => {
    console.log(props);

    return (<div>
        <h1 name={props.name}>Function Component : Hello Yamtee</h1>
        {props.child}
    </div>)
}

export default Greet