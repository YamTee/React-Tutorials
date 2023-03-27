import React from 'react';

const Person = ({ person }) => {
    return <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
}

export default Person