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
            return state.filter(item => item.id != action.itemId)
        case 'multipleDelete':
            return state.filter(item => action.itemIds.indexOf(item.id) < 0 )
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
        case 'sort':
            if(state[action.position].id != action.itemId) {
                let origin
                state.map((item, id) => item.id == action.itemId ? origin = id: null)
                state.splice(action.position, 0, state.splice(origin, 1)[0])
                state = state
            } 
            return state
        default:
            return state;
    }
}

export default todoList