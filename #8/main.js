'use strict'

// Добавляем фон для четных елементов
let divOven = document.getElementsByClassName("grid-item");
let itemOven = divOven.length;
	for(let i=0; i<itemOven; i++){
        if(i %2 !==0) {	            
            document.getElementsByClassName('grid-item')[i].style.background = '#aff0ad';
        }
    }

//добавляем класс для нечетных елементов
let divOdd = document.getElementsByClassName("grid-item");
let itemOdd = divOdd.length;
	for(let i=0; i<itemOdd; i++){
        if(i %2 !==1) {	     
            let element = document.getElementsByClassName('grid-item')[i];
            element.className += ' grid-item-background';
        }
    }

let txt = prompt();  // получаем текст
if(txt.includes("1") === true) { // если тру, добавляем селектору р класс numeric
    let element = document.querySelector("p");
    element.innerText = txt; // текст 
    element.className += ' numeric'; //класс
}
else {// если false 
    let element = document.querySelector("p");
    element.innerText = txt; // добавляем селектору р текст
}

