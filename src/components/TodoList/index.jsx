import React from "react";
import PropTypes from 'prop-types'
import TodoContainer from "../../containers/TodoContainer";

class TodoList extends React.Component {
    render() {
        return (<div className={"todo-list"}>
            {this.props.todoList.map(
                (todo, index) => <TodoContainer key={index} id={index} status={todo.status} text={todo.text}/>
            )}
        </div>)
    }
}

export default TodoList;