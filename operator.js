// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("============");

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1); 
console.log(1 % 1); // 나머지
console.log(1 ** 1); // 제곱
console.log("============");

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement);
const postIncrement = counter++;
console.log(postIncrement);
const preDecrement = --counter;
console.log(preIncrement);
const postDecrement = counter--;
console.log(postDecrement);
console.log("============");

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
console.log(x);
console.log("============");

// 5. Comparison operators
console.log(1 < 1);
console.log(1 <= 1);
console.log(1 > 1);
console.log(1 >= 1);
console.log("============");

// 6. Logical operators: || (or), && (and), ! (not)
//const value1 = true;
const value1 = false;
const value2 = 4 < 2;

// || (or) -> 앞에 true가 있으면 거기서 끝이기에 가벼운 것들을 앞에다 놓는 것이 좋다
console.log(`or: ${value1 || value2 || check()}`);
function check() {
    console.log('check');
    return true;
}

// && (and) 
console.log(`and: ${value1 && value2 && check()}`);

// ! (not) 
console.log(!value1);
console.log("============");

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion -> 타입은 안봄
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equality, no type conversion -> 타입도 봄
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
console.log("============");

// object equality
const jinho1 = { name: 'jinho' };
const jinho2 = { name: 'jinho' };
const jinho3 = jinho1;
console.log(jinho1 == jinho2);
console.log(jinho1 === jinho2);
console.log(jinho1 === jinho3);
console.log("============");

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log("============");

// 8. Conditional operators: if
// if, else if, else
let name = 'df';
if (name === 'jinho') {
    console.log('Hi jinho');
} else if (name === 'coder') {
    console.log('Hi coder');
} else {
    console.log('Hi unknown');
}
console.log("============");

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'jinho' ? 'yes' : 'no');
console.log("============");

// 10. Switch
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('back');
        break;
    default:
        console.log('unknown');
        break;
}
console.log("============");

// 11. Loops
// while
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    --i;
}

// do while
do {
    console.log(`do while: ${i}`);
    --i;
} while (i > 0);

// for
for (let i = 3; i > 0; i -= 2) {
    console.log(`for: ${i}`);
}

// nested loops
for (let i = 0; i < 2; ++i) {
    for (let j = 0; j < 2; ++j) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
console.log("============");

// test1
for (let i = 0; i <= 10; ++i) {
    if (i % 2 === 0) {
        console.log(`q1: ${i}`);
    }
}

// test2
for (let i = 0; i <= 10; ++i) {
    if (i === 8) {
        break;
    }
    console.log(`q2: ${i}`);
}
console.log("============");