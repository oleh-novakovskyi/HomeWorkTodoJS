let todos = [
  {
    userId: 1,
    id: 1,
    title: "Complete Hometask 08",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "Read a book",
    completed: true
  },
  {
    userId: 2,
    id: 3,
    title: "Go to the gym",
    completed: false
  }
];


let countTodos = todos.length; // получаем число todo


// создаем контейнер для кнопки
let btnDiv = document.createElement('div');
btnDiv.id = 'button';        
document.body.prepend(btnDiv);

//создаем кнопку, добавления новой todo
var button = document.createElement('button');
button.innerHTML = 'I\'m A Button!'; 
btnDiv.before(button);


// создаем контейнер для todo
let div = document.createElement('div');
div.id = 'todoList';        
document.body.prepend(div);

//вывод всех todo
for (let i = 0; i < countTodos; i++) {
  
  let title = todos[i].title, 
  completed = todos[i].completed,
  id = todos[i].id,
  userId = todos[i].userId,
  state = completed ? 'completed' : ''; // уверен что есть другой подход!

  todoList.innerHTML += `<div class="todo ${state}" id="todo-${id}">
  <div class="todo-container">
  <p class="title">${title}</p>
  <span class="delete-icon"></span>
  </div>
  <div class="todo-container">
  <span class="user-id">User #${userId}</span>
  <span class="state-icon"></span>
  </div>
  </div>`; // возможно есть вариант с построением дерева, но я не разобрался. 

}

const todoContainer = document.getElementById('todoList');

todoContainer.addEventListener('click', (event) => {
  const target = event.target;
  const classTodo = target.closest('.todo');

  if(target.classList.contains('delete-icon')) {//  если клик по кнопке и иконкой delete-icon
    let todoId =  classTodo.id;         
    deleteTodo(todoId);
  }

  else if (target.classList.contains('state-icon')) { //  если клик по кнопке и иконкой state-icon
    let stateId =  classTodo.id;
    let stateTodo =  classTodo.classList.contains('completed'); 
    setTodoState(stateId, !stateTodo);    
  }
});

function addTodo(userId, id, title, completed) { //добавление новой туду
  todos.push(
    {
      userId, 
      id, 
      title, 
      completed
    }
  );   
};

function setTodoState(id, completed) { //изменение состояния туду
  clearId = parseInt(id.replace(/[^\d]/g, '')); // пробовал сделать функцию, но как то не пошло.. попробую еще раз пересмотреть и таки сделать функцию  
  let targetTodo = todos.find(item => item.id === clearId); 
  targetTodo.completed = completed;

  if (completed == true) { // если true, добавляем класс 
    let addClass = document.getElementById(id); 
    addClass.className += ' completed'; 
  } 
  else // если false удаляем класс
  {
    let remClass = document.getElementById(id); 
    remClass.classList.remove("completed");
  }
  console.log(clearId, completed);
}

function deleteTodo(id) { //удаление туду по ид 
  let clearId = parseInt(id.replace(/[^\d]/g, ''));
  todos = todos.filter(item => item.id !== clearId);   
  let remTodo = document.getElementById(id); 
  remTodo.remove();  
}
