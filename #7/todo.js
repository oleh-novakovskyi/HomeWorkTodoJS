let todos = [
  {
    userId: 1,
    id: 1,
    title: "Todo Item 1",
    completed: false
  },
  {
    userId: 2,
    id: 2,
    title: "Todo Item 1",
    completed: false
  }
];

function addTodo(userId, id, title, state) {// добавление новой туду
  todos.push(
    {
      userId: userId, 
      id: id, 
      title: title, 
      completed: state
    }
  );   
};

function setTodoState(id, state) { // изменение состояния туду
  let targetTodo = todos.find(item => item.id === id); 
  targetTodo.completed = state;
}

function deleteTodo(id) { // удаление туду по ид
todos = todos.filter(item => item.id !== id);
}
