import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Person.css';

class Person extends Component {
	componentDidMount() {
		if(this.props.position === 0) {
			this.inputElement.focus();
		}
	}
	render() {
		return (
			<div className="Person">
				<p onClick={this.props.click}>I&#39;m {this.props.name} and I am {this.props.age} years old!</p>
				<input
					ref = { (inp) => { this.inputElement = inp } }
					type="text" 
					onChange={this.props.changed} 
					value={this.props.name} />
			</div>
		)
	}
}

Person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	position: PropTypes.number,
	click: PropTypes.func,
	changed: PropTypes.func,
}

export default Person;