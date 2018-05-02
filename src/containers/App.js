import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import './App.css';

class App extends PureComponent {
  state = {
    persons: [
      { id: '1', name: 'Albert', age: 29},
      { id: '2', name: 'Manu', age: 25},
      { id: '3', name: 'Max', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked: 0,
  }

  // shouldComponentUpdate (nextProps, nextState ) {
  //   console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

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
    this.setState( (prevState ) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
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
      <button onClick = { () => this.setState({ showPersons: true }) } >Show Persons</button>
        <Cockpit
          appTitle = {this.props.title}
          showPersons = { this.state.showPersons }
          persons = { this.state.persons } 
          clicked = { this.togglePersonsHandler } />
        { persons }
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'its working'));
  }
}

App.propTypes = {
  title: PropTypes.string
}

export default App;
