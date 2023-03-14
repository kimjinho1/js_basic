'use strict'

// Promise is a JavaScript object for asynchronous operation
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// When new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('jinho');
        // reject(new Error('no network'))
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    })

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    })
}).then(num => console.log(num));

// 4. Error Handling
const getA = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('a'), 1000);
    });
const getB = a =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${a} => b`), 1000);
        setTimeout(() => reject(`error! ${a} => b`), 1000);
    });
const getC = b =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${b} => c`), 1000);
        // setTimeout(() => reject(`error! ${b} => c`), 1000);
    });

getA()
.then(getB)
// .then(a => getB(a))
.catch(console.log)
.then(getC)
.then(console.log)