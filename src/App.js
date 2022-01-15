import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';

import { FunctionComponent } from './components/learning-examples/FunctionComponent';

import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}

        <TodoApp />
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="learningComponents">
        <h1>Hi Sample TODO</h1>
        <FirstComponent />
        <SecondComponent />
        <FunctionComponent />


      </div>
    );
  }
}






export default App;