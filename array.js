'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
console.log('============');

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
console.log('============');

// 3. Looping over an array
// for
for (let i = 0; i < fruits.length; ++i) {
    console.log(fruits[i]);
}

// for of
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach
fruits.forEach((fruit, index) => console.log(fruit));
console.log('============');

// 4. Add, Delete, Copy
// Add
fruits.push('peach');
console.log(fruits);

// Delete
fruits.pop();
console.log(fruits);

// shift, unshift는 앞에 것을 처리하는 거라 push, pop애 비해 속도가 아주 느림
// unshift: add an item to the beginning
fruits.unshift('peach');
console.log(fruits);

// shift: delete an item to the beginning
fruits.shift();
console.log(fruits);

// splice: remove an item by index position
fruits.push('peach');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'banana', 'grape');
console.log(fruits);

// combine two arrays
const fruits2 = ['1', '2']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
console.log('============');

// 5. Searching
// indexof
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('not'));

// includes
console.log(fruits.includes('apple'));
console.log(fruits.includes('not'));

// lastIndexOf
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));

console.log('============');