const uid = () => Math.random().toString(34).slice(2);

export function addTodo(title, description){
    return {
        type: 'ADD_TODO',
        listItem: {
            title,
            description,
            id: uid()
        }
    };
};

export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        id
    };
};

export function editTodo(id, title, description){
    return {
        type: 'EDIT_TODO',
        id,
        title,
        description
    };
};