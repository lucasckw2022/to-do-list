let defaultId = 0

export const addTodoItem = (text, dueDate) => ({
  type: 'add',
  id: defaultId++,
  text,
  dueDate
})

export const deleteTodoItem = (itemId) => ({
  type: 'delete',
  itemId
})