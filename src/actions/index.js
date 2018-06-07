// let defaultId = 0

export const addTodoItem = (itemId, text, dueDate) => ({
  type: 'add',
  itemId,
  text,
  dueDate
})

export const deleteTodoItem = (itemId) => ({
  type: 'delete',
  itemId
})

export const deleteObject = ()=> ({
  type: 'del',
  itemId
})

export const updateTodoItem = (itemId, text, dueDate) => ({
  type: 'update',
  itemId,
  text,
  dueDate
})