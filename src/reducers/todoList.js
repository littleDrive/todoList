import todoStatus from "../constants/todoStatus";
import {ADD_TODO, DELETE_TODO, MARK_CANCEL, MARK_DONE, SHOW_DONE_TODO_LIST} from "../constants/actionTypes";

const todoList = (state = [], action) => {
    switch (action.type) {
        case MARK_DONE:
            state[action.id].status = todoStatus.DONE
            return [...state]
        case MARK_CANCEL:
            state[action.id].status = todoStatus.DOING
            return [...state]
        case ADD_TODO:
            return [...state, {text: action.text, status: todoStatus.DOING}]
        case DELETE_TODO:
            state.splice(action.id, 1)
            return [...state]
        case SHOW_DONE_TODO_LIST:
            return [state.filter(todo => todo.status === todoStatus.DONE)]
        default:
            return state
    }
}
export default todoList