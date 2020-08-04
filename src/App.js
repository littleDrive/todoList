import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoFormContainer from './containers/todoForm';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <TodoList/>
      <TodoFormContainer/>
    </div>
  );
}

export default App;
