import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Albert', age: "29"},
      { id: '2', name: 'Manu', age: "25"},
      { id: '3', name: 'Max', age: "26"}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { 
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
            		<Person 
		              click={this.deletePersonHandler.bind(this, index)}
		              name={person.name} 
		              age={person.age}
		              changed={(event) => this.nameChangedHandler(event, person.id)} />
		           </ErrorBoundary>
          })}

        </div>
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
    	assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
    	assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
        	className={btnClass}
        	onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'its working'));
  }
}

export default App;
