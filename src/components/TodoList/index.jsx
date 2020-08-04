import React from 'react'

class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillUpdate() {
        console.log("1111")

        console.log(this.props.todos)
    }
    render() {
        return (
            // <ul>
            //     {/* {this.props.todos.map(todo => (
            //         <li key={todo.id}>
            //             {todo.text}
            //         </li>
            //     ))} */}
            //     {this.props.todos}
            // </ul>
        <p>hello{this.props.todos}</p>
        )
    }
}

export default TodoList

