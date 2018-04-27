import React from 'react';
import PropTypes from 'prop-types';

import './Cockpit.css';

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
        <div>
            <h1>Hi, I&apos;m a react app</h1>
            <p className = { classes.join( ' ' ) }>This is really working!</p>
            <button
                style={style}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

cockpit.propTypes = {
    showPersons: PropTypes.bool,
    persons: PropTypes.object,
    clicked: PropTypes.func
}

export default cockpit;