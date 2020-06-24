const Reducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                action.listItem,
                ...state
            ];

        case 'DELETE_TODO':
            return state.filter(item => {
                return item.id != action.id;
            });

        case 'EDIT_TODO':
            return state.map(item => {
                if(item.id != action.id)
                    return item;
                return Object.assign({}, item, { text: action.text });
            })
        
        default:
            return state;
    }
}