'use strict'
//Task #1

const user = { name: 'Ann', age: 54 };
const user2 = {...user};
user2.age = 40;

(function() {
  console.info('init...');
})();
user2.sayHi = function() {
    console.log(`Hi from ${this.name}`);
}

user2.sayHi();
let userAges = [user, user2].map(item => item.age);
const oldestUserAge = Math.max(...userAges);
console.log(oldestUserAge);




