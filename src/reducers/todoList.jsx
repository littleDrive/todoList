export const todoList = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, action.text)
        default:
            return state
    }
}

