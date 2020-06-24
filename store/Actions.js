const uid = () => Math.random().toString(34).slice(2);

const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        listItem: {
            text,
            id: uid()
        }
    };
}

const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    };
}

const editTodo = (id, text) => {
    return {
        type: 'EDIT_TODO',
        id,
        text
    };
}

module.exports = { addTodo, deleteTodo, editTodo };