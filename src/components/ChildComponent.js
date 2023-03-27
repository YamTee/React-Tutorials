import React from 'react';

const ChildComponent = (props) => {
    return <button onClick={() => props.greetHandler('child')}> Greet </button>;
}

export default ChildComponent;