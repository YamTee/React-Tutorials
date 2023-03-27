import React from 'react';
import Person from './Person';

const NamesList = () => {
    const names = [
        {
            id: 1,
            name: 'Bruce',
            skill: 'React',
            age: 22

        },
        {
            id: 1,
            name: 'Rick',
            skill: 'Angular',
            age: 30

        },
        {
            id: 1,
            name: 'Daryl',
            skill: 'Vue',
            age: 25

        },
        {
            id: 1,
            name: 'Carol',
            skill: 'Next',
            age: 45

        },
    ];

    const namesTag = names.map(name => <Person person={name} />);

    return namesTag;
}

export default NamesList;