'use strict';

/* ============ Variable ============ */
// let (added in ES6)
let globalName = 'global jinho';
{
    let name = 'jinho';
    console.log(name);
    name = 'hello'
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (옛날 꺼 쓰지마)
// var hoisting (선언을 위로 끌어올림)
// 그렇기에 아래같이 역순으로 선언되도 에러가 안남
// var 은 block scope가 안 먹음 -> 항상 global 변수임
{
    age = 4;
    var age;
}
console.log(age);

/* ============ Variable types ============ */
// Const -> immutable data type
// primitive type
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - inf, -inf, NaN
const inf = 1 / 0;
const negativeInf = -1 / 0;
const Nan = 'not a number' / 2;
console.log(inf);
console.log(negativeInf);
console.log(Nan);

// bigInt (아직 잘 안씀)
const bigInt = 123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const jinho = 'jinho';
const greet = 'hello' + jinho;
console.log(`value: ${jinho}, type: ${typeof jinho}`);
const helloJinho = `hi ${jinho}!`;
console.log(`value: ${helloJinho}, type: ${typeof helloJinho}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const t = true;
const test = 3 < 1;
console.log(`value: ${t}, type: ${typeof t}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object
const obj = { name: 'jinho', age: 20 };
obj.age = 21;

/* ============ Dynamic typing ============ */
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // error