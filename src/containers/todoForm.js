import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TodoForm from '../components/TodoForm'


const mapDispatchToProps = (dispatch) => ({
    addTodo :  (text) => {
        dispatch(addTodo(text))
    }
})

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm)
export default TodoFormContainer