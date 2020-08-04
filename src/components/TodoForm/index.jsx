import React from 'react'
class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    getInputValue = (event) =>{
        this.setState(
            {
                text: event.target.value
            }
        )
    }

    submit = () =>{
        this.props.addTodo(this.state.text)
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="add todo..." onChange={this.getInputValue}/>
                <button onClick={this.submit}>Add</button>
            </div>
        )
    }
}

export default TodoForm