'use strict'
/*
let fruitName = 'Apple';

fruitName.toUpperCase();
fruitName.toLowerCase();

let fruitName = 'Apple and orange';

fruitName.indexOf('Apple');
fruitName.includes('and');
*/
/*
let fruitName = 'Apple and orange';
fruitName.split(' and ');
fruitName.join(',');
console.log(fruitName.split(' and '));
console.log(fruitName.join(', and ,'));
*/

/*
let user = {
  name: 'Oleh',
  age: 30,
  gender: 'male'
};

console.log(user.name);
console.log(user.age);
console.log(user.age = 55);
console.table(user);

*/
/*
let user = {
  name: 'Oleh',
  'work is IT': true
};

user['name'] // Oleh
user['work is IT'] // true

const key = 'work is IT';
user[key] //true
*/
/*
const user = {
  name: 'Oleh',
  age: 30,
  gender: 'male',
  address: {
    city: 'Zhytomyr',
    country: 'Ukraine'
  }
};

Object.freeze(user);

user.address.city = 'Odessa';

console.table(user);
*/
/*
let users = [
  {user: 'Oleh', age: 30, gender: 'male'},
  {user: 'Anna', age: 20, gender: 'female'}
];

let isUserFemale = function(currentUser) {
  return currentUser.gender === 'female';
}

let femaleUsers = users.filter(isUserFemale);
console.log(femaleUsers);
*/

/*
let users = [
  {user: 'Oleh', age: 30, gender: 'male'},
  {user: 'Anna', age: 20, gender: 'female'}
];

let isUserFemale = function(currentUser) {
  return currentUser.gender === 'female';
}

let femaleUsers = users.filter(isUserFemale);
console.log(femaleUsers);
*/
/*
console.table(users[0]);
console.log(users[1].user);
*/
/*
let users = [
  {user: 'Oleh', age: 30, gender: 'male'},
  {user: 'Anna', age: 20, gender: 'female'},
  {user: 'Anna1', age: 22, gender: 'female'},
  {user: 'Oleh1', age: 35, gender: 'male'}
]; 

let names = users.map(function(item, index, array){
  //return item.user;
  return item.age *= 2;
});
console.log(names);
*/
/*
let users = [
  {name: 'Oleh', age: 30, gender: 'male'},
  {name: 'Anna', age: 20, gender: 'female'},
  {name: 'Anna1', age: 22, gender: 'female'},
  {name: 'Oleh1', age: 35, gender: 'male'}
]; 
let inputArray = users.map(user => user.name);

console.log(inputArray);
*/
/*
let users = [
  {name: 'Oleh', age: 30, gender: 'male'}  
]; 

for (let key in users) {
  console.log(key);
  console.log(users[key]);
}

Object.keys(users);
Object.values(users);

console.log(Object.keys(users));
console.log(Object.values(users));
*/

const user = {
  name: 'Oleh',
  age: 30,
  sendText() {
    console.log(`Hi, call me! ${this.name}`);
    }
};

user.sendText()
