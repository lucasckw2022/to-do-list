const todoList = (state = [], action) => {
    switch (action.type) {
        case 'add': 
            return [...state, {
                id: action.id,
                text: action.text,
                dueDate: action.dueDate,
                completed: false
            }];
        case 'delete':
            return state.filter(item => item.id != action.itemId)
        default:
            return state;
    }
}

export default todoList