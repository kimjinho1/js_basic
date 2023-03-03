// 1. Function declaration
// 최대한 한 가지 일만 하도록 만들자
function printHello() {
    console.log('Hello');
}
printHello();

// 타입 지정안해도 돌긴 함 -> typescript는 싹다 지정
'use strict'
function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);
console.log('============');

// 2. Parameters
function changeName(obj) {
    obj.name = 'coder';
}

const jinho = { name: 'jinho' };
console.log(jinho.name);
changeName(jinho);
console.log(jinho.name);
console.log('============');

// 3. Default parameters
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
console.log('============');

// 4. Rest parameters
function printAll(...args) {
    for (let i = 0; i < args.length; ++i) {
        console.log(args[i]);
    }

    // for (const arg of args) {
    //     console.log(arg);
    // }

    // args.forEach((arg) => console.log(arg));
}
printAll('1', '2', '3');
console.log('============');

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);
}
printMessage();
console.log('============');

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const res = sum(1, 2);
console.log(res);
console.log('============');

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return ;
    }
    // long upgrade logic...
}

// 8. First-class function
// 8.1) Function expression
// 아래의 경우는 hoisting X
const print = function () { // anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
console.log('============');

// 8.2) Callback function (함수를 전달)
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log("yes!");
}

// named function
// better debugging in debugger's stack traces
// recursions (anonymous는 함수 이름을 몰라서 재귀 X)
const printNo = function print () {
    console.log("no!");
}
randomQuiz('love you', printYes, printNo);
randomQuiz('hi', printYes, printNo);

// Arrow function
// always anonymous
const tempSimplePrint = function() {
    console.log('simplePrint!');
}

const simplePrint = () => console.log('simplePrint!');
// const add = function (a, b) {
//     return a + b;
// }
const add = (a, b) => a + b;

const multiply = (a, b) => {
    return a * b;
}

simplePrint();
console.log(add(3, 3));
console.log(multiply(3, 3));

// IIFE(Immediately Invoked Function Expression) -> 함수를 바로 실행함
(function hello() {
    console.log('IIFE');
})();
console.log('============');

// QUIZ
const substract = (a, b) => a - b;
const divide = (a, b) => a / b;
const calculate = (command, a, b) => {
    if (command != add && command != substract && command != multiply && command != divide)
        return null;
    return command(a, b);
}
console.log(calculate(add, 1, 2))
console.log(calculate(divide, 4, 2))
console.log(calculate(simplePrint, 4, 2))
