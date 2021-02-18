'use strict'

//Task #1
/*
let fruits = ["Apples", "Pear", "Orange"]; //Массив

let shoppingCart = fruits; // Делаем копию массива?! 
shoppingCart.push("Banana");// Добавляем в новый массив новое значение

alert( fruits.length ); //4

*/

//Task #2
/*
let styles = ["Jazz","Blues"]; // создаем массив
styles.push("Rock-n-Roll"); // добавляем в массив значение
styles[Math.floor((styles.length - 1) / 2)] = "Classics"; // вставляем в середину массива 
styles.unshift("Rap", "Reggae");// добавляем в начало массива 
console.log(styles);
*/

//Task #3
/*
function getAverageAge(numbers) {
  return numbers.reduce((prev, number) => prev + number, 0) / numbers.length;// тяжело пока понимаю, данную конструкцию. 
}
let numbers = [15, 60, 45, 30]; // создаем массив
console.log(getAverageAge(numbers));// выводим результат функции в консоль

use split() for string // тут не совсем понял, для чего это использовать (или как)

*/

//Task #4
// тут не уверен, что вообще понял суть задания. Так что сильно не бей! 
/*
function filterRange(arr, a, b) {  
  return arr.filter(item => (a <= item && item <= b));
}

let arrNumbers = [15, 22, 10, 5];// создаем массив
let myFilter = filterRange(arrNumbers, 10, 18);// задаем фильтр
console.log(myFilter); // получаем совпаденя
console.log(arrNumbers); // выводим весь массив
*/

