import React from 'react';
import PropTypes from 'prop-types';

import './Cockpit.css';
import Aux from '../../hoc/ReactAux';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };
    if(props.showPersons) {
        style.backgroundColor = 'red';
    }
    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }
    return(
        <Aux>
            <h1>{ props.appTitle }</h1>
            <p className = { classes.join( ' ' ) }>This is really working!</p>
            <button
                style={style}
                onClick={props.clicked}>Toggle Persons</button>
        </Aux>
    );
}

cockpit.propTypes = {
    appTitle: PropTypes.string,
    showPersons: PropTypes.bool,
    persons: PropTypes.array,
    clicked: PropTypes.func
}

export default cockpit;