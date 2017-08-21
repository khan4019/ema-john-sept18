import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';

import AddTodo from './components/AddTodo/AddTodo';
import VisualTodoList from './containers/VisualTodoList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title="Redux Relax todo"></AppBar>
        
        <AddTodo></AddTodo>
        <VisualTodoList></VisualTodoList>
      </div>
    );
  }
}

export default App;
