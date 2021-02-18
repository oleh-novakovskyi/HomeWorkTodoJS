'use strict'


//Task #1
/*
const numeric = 5; //вводим число
let result = (numeric % 2 == 0) ? 'The number is odd' : 'The number is odd'; //проверяем 
console.log(result); //выводим результат в консоль
*/
//Task #2

//const numeric = 13; //вводим число

/* #1
if (!(numeric >= 14 && numeric <= 90)) {
  console.log('Yes'); //выводим результат в консоль
} else {
  console.log('No'); //выводим результат в консоль
}
*/

/* #2
if (numeric >= 14 && numeric <= 90) {
  console.log('true'); //если входит
} else {
  console.log('false'); //если не входит
}
*/

//Task #3
/* 
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/
//Task #4
/* 
let num = 0;
while (num < 10) {
  num++;
  if (num % 2) console.log(num);
}
*/

//Task #5
/*
const usrLogin = prompt("Who's there?"); // получаем логин

if (usrLogin == 'Admin') { //если Админ то: 

  const usrPwd = prompt("Password?"); //получаем пароль

  if (usrPwd == 'TheMaster') { // если пароль правильный 
    alert('Welcome!');
  } else if (usrPwd == 'Cancel') { // если Cancel
    alert('Canceled');
  } else {
    alert('Wrong password'); // любой другой пароль
  }

} else if (usrLogin == 'Cancel') { //если Cancel
  alert('Canceled');
} else {
  alert('I don\'t know you'); // если любой другой логин 
}
*/
