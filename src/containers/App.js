import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import './App.css';

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

    if (this.state.showPersons) {
      persons =
        <Persons 
          persons = { this.state.persons } 
          clicked = { this.deletePersonHandler }
          changed = { this.nameChangedHandler } />;
    }

    return (
      <div className="App">
        <Cockpit 
          showPersons = { this.state.showPersons }
          persons = { this.state.persons } 
          clicked = { this.togglePersonsHandler } />
        { persons }
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'its working'));
  }
}

export default App;
