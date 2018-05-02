import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Person from './Person/Person';

class Persons extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || 
    //     nextProps.changed !== this.props.changed || 
    //     nextProps.clicked !== this.props.clicked;
    // }
    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                position={index}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
} 

Persons.propTypes = {
    persons: PropTypes.array,
    clicked: PropTypes.func,
    changed: PropTypes.func
}

export default Persons;