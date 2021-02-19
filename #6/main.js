'use strict'

//Task #1
/*
let price = '$150'; // задаем цену 'строку'
function extractCurrencyValue(price) { // создаем функцию 
  return +price.slice(1); // удаляем первый символ
}
console.log(extractCurrencyValue(price));// выводим результат в сонсоль
*/

//Task #2
/*
function first(letter) {// объявляем функцию
  return letter[0].toUpperCase() + letter.slice(1);// Изменяем первую букву в строке!
}
console.log(first("oleh")); // выводим результат в консоль
*/

//Task #3
/*
let user = {}; //создаем пустой объект
user.name = 'John'; //добавляем в объект ключ "name" + значение "John"
user.surname = 'Smith'; //добавляем в объект ключ "surname" + значение "Smith"
user.name = 'Pete'; // изменяем user.name

function sayHi() { // создаем функцию
  console.log(`Hello, from ${this.name}`);
};
user.sayHi = sayHi; // добавляем метод в объект
user.sayHi(); // вызов метода/функции
*/

//Task #4
/*
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

const users = [
  {name: 'Ivan', age: 35, gender: 'male'},
  {name: 'Ann', age: 33, gender: 'female'},
  {name: 'Jane', age: 40, gender: 'female'},
  {name: 'Alex', age: 20, gender: 'male'},
  {name: 'Sam', age: 52, gender: 'female'}
];

console.log(getAverageAge(users));
*/

//Task #5
/*
function isEmpty(obj) {
  for (let key in obj) {  
    return false;
  }
  return true;
}

let schedule = {};
console.log(isEmpty(schedule)); 
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); 

isEmpty(schedule);
*/

//Task #6
/*
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(`menu width=${menu.width} height=${menu.height} title=${menu.title}`);
*/

//Task #7
/*
let calc = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = 10;
    this.b = 15;
  }
};

calc.read();
console.log(calc.sum());
console.log(calc.mul());
*/

//Task #8
/*
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); 

*/


