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
    console.log(childMessage);
}
printMessage();