import React, { Component } from 'react';
import '../style/style.css';
import { connect } from 'react-redux'
import TodoList from '../components/todoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
