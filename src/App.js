import React from 'react';
import './App.css';
import TodoFormContainer from './containers/todoForm';
import TodoListContainer from './containers/todoList';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <TodoListContainer/>
      <TodoFormContainer/>
      <TodoList/>
    </div>
  );
}

export default App;
