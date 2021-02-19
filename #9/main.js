'use strict'

let addClass = document.getElementById('openPopupButton'); // Добавление класса visible
let delClass = document.getElementById('closePopupButton'); // Удаление класса visible

//Добавление класса visible
addClass.onclick = function() { 
  let element = document.querySelector('section');
  element.className += ' visible';  
}

//Удаление класса visible
delClass.onclick = function() { 
  let element = document.querySelector('section');
  element.classList.remove("visible");  
}

//Удаление класса visible по нажатию клавиши Escape
document.onkeydown = function(e){
  if (e.keyCode == 27) {
    let element = document.querySelector('section');
    element.classList.remove("visible"); 
  }
};

//Возможно это дело можно оптимизировать =) 