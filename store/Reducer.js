const Reducer = (state = {}, action) => {
    switch (action.type) {
        //Adds the task into the list
        case 'ADD_TODO':
            if(typeof state.todo === 'undefined')
                return {
                    'todo': [action.listItem]
                };
            return {
                'todo': [action.listItem, ...state.todo]
            };
        //Deletes the task from the list given a particular ID
        case 'DELETE_TODO':
            return {
                'todo': state.todo.filter(item => {
                    return item.id != action.id;
                })
            };
        //Edit the task with the new data given an ID
        case 'EDIT_TODO':
            return {
                'todo': state.todo.map(item => {
                    if(item.id != action.id)
                        return item;
                    return Object.assign({}, item, { title: action.title, description: action.description });
                })
            };
        //Default returns the same state
        default:
            return state;
    };
};

export default Reducer;