let _id = 0;
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: _id++,
    text
});

