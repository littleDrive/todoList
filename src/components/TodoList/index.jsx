import Todo from '../Todo'
import React from 'react'

class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {/* {this.props.todoList.map((todo, index) => {
                    <Todo {...todo} key={index}></Todo>
                })} */}

                <Todo/>
            </ul>
        )
    }
}

export default TodoList