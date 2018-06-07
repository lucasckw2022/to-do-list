const todoList = (state = [], action) => {
    switch (action.type) {
        case 'add': 
            return [...state, {
                id: action.itemId,
                text: action.text,
                dueDate: action.dueDate,
                completed: false
            }];
        case 'delete':
            state.filter(item => {
                console.log(item, action.itemId, item.id != action.itemId)
                item.id != action.itemId
            })
            return state.filter(item => item.id != action.itemId)
        case 'del':
            return state.filter((item, id) => id != action.itemId)
        case 'update':
            let updatedItem = {
                id: action.itemId,
                text: action.text,
                dueDate: action.dueDate,
                completed: false
            }
            return state.map(item => {
                return item.id === action.itemId ? updatedItem : item
            })
        default:
            return state;
    }
}

export default todoList