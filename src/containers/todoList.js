import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = state => {
    console.log(state)
  }


const mapDispatchToProps = (dispatch) => ({

})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoListContainer