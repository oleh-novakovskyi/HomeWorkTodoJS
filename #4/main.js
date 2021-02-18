'use strict'
//Task #1
/*
//#1
function cords(x,n) {   
    return x**n;
}
console.log(cords(2,10));

//#2
function cords(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
console.log(cords(5,4));
*/

//Task #2
/*
//#1
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(2,3));

//#2
function min(a, b) {
  return a < b ? a : b;
}
console.log(min(1,-5));
*/

//Task #3
/*
//#1
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(4, 10));

//#2
console.log(Math.max(-8, 0));
*/


//Task #4
/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
console.log(ask());
*/


//Task #5
/*
function logger (message, logger = console.log) {
  logger(message);
}
logger('Hello!');
*/


//Task #6
/*
(function showMessage(message) {
  console.log(message);
  })('Task #6');
*/
