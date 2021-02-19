'use strict';

//todo Array
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


let countTodos = todos.length;  

document.getElementById('rendomId').value=countTodos+1; // Рендомный ИД TODO


//выводим список todo из массива
for (let i = 0; i < countTodos; i++) {
    
    let title = todos[i].title, 
    completed = todos[i].completed,
    id = todos[i].id,
    userId = todos[i].userId,
    
    state = completed ? 'completed' : ''; 
  
    todoList.innerHTML += `<div class="todo ${state}" id="todo-${id}">
    <div class="todo-container">
    <p class="title">${title}</p>
    <span class="delete-icon"></span>
    </div>
    <div class="todo-container">
    <span class="user-id">User #${userId}</span>
    <span class="state-icon"></span>
    </div>
    </div>`; 
  
}
  
const todoContainer = document.getElementById('todoList');

todoContainer.addEventListener('click', (event) => {
    const target = event.target;
    const classTodo = target.closest('.todo');
  
    if(target.classList.contains('delete-icon')) {
      let todoId =  classTodo.id;         
      deleteTodo(todoId);
    }
  
    else if (target.classList.contains('state-icon')) {
      let stateId =  classTodo.id;
      let stateTodo =  classTodo.classList.contains('completed'); 
      setTodoState(stateId, !stateTodo);    
    }    
  });
  

 //Добавление todo в массив
  function addToDoList() {
    let userId, title, d = document;
  
    if (d.getElementById('userId').value) {
      userId = Number(d.getElementById('userId').value);
    } else {
      d.getElementById('userId').focus();
      return;
    }     

    if (d.getElementById('title').value) {
      title = d.getElementById('title').value;
    } else {
      d.getElementById('title').focus();
      return;
    }

    let completed = Boolean(d.getElementById('completed').value);   

    let id = Number(d.getElementById('rendomId').value); 

    let html = `<div class="todo" id="todo-${id}">
    <div class="todo-container">
    <p class="title">${title}</p>
    <span class="delete-icon"></span>
    </div>
    <div class="todo-container">
    <span class="user-id">User #${userId}</span>
    <span class="state-icon"></span>
    </div>
    </div>`;    
    
    addTodo(userId, id, title, completed);

    if (d.getElementById('todoList').innerHTML += html) d.forms.myform.reset();  
    
  }

  //Добавление новой todo в массив
  function addTodo(userId, id, title, completed) {
    todos.push(
      {
        userId, 
        id, 
        title, 
        completed
      }
    );   
  };
  

  //Изменяем состояние todo
  function setTodoState(id, completed) {
    let clearId = parseInt(id.replace(/[^\d]/g, ''));
    let targetTodo = todos.find(item => item.id === clearId); 
    targetTodo.completed = completed;
  
    if (completed == true) { 
      let addClass = document.getElementById(id); 
      addClass.className += ' completed'; 
    } 
    else 
    {
      let remClass = document.getElementById(id); 
      remClass.classList.remove("completed");
    }
    
  }

  //Удаляем todo из списка массива + из области видимости
  function deleteTodo(id) { 
    let clearId = parseInt(id.replace(/[^\d]/g, ''));
    todos = todos.filter(item => item.id !== clearId); 
    let remTodo = document.getElementById(id); 
    remTodo.remove();  
  }
  