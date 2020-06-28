const Reducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            if(typeof state.todo === 'undefined')
                return {
                    'todo': [action.listItem]
                }
            return {
                'todo': [action.listItem, ...state.todo]
            };

        case 'DELETE_TODO':
            return {
                'todo': state.todo.filter(item => {
                    return item.id != action.id;
                })
            };

        case 'EDIT_TODO':
            return {
                'todo': state.todo.map(item => {
                    if(item.id != action.id)
                        return item;
                    return Object.assign({}, item, { title: action.title, description: action.description });
                })
            };

        default:
            return state;
    }
}

export default Reducer;