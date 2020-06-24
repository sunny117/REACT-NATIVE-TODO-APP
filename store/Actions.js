const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text){
    return {
        type: 'ADD_TODO',
        listItem: {
            text,
            id: uid()
        }
    };
}

export function  deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        id
    };
}

export function  editTodo(id, text){
    return {
        type: 'EDIT_TODO',
        id,
        text
    };
}