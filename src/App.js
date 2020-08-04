import React from 'react';
import './App.css';
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import DoneListContainer from "./containers/DoneListContainer";
import { HashRouter, Link, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <ul>
          <li className="App-link"><Link to={"/done-list"}>go to done page</Link></li>
          <li className="App-link"><Link to={"/"}>show all list</Link></li>
        </ul>
        <p>Todo List</p>
        <Route path={"/done-list"} component={DoneListContainer} />
        <Route exact path={"/"} render={() => {
          return (
            <div>
              <TodoListContainer />
              <TodoFormContainer />
            </div>
          )
        }} />
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
