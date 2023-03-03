// Objects

// 1. Literals and properties
const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jinho = { name: 'jinho', age: 26 }
print(jinho);

jinho.hasJob = true;
console.log(jinho.hasJob);

delete jinho.hasJob;
console.log(jinho.hasJob);

// 2. Computerd properties
console.log(jinho.name);
console.log(jinho['name']);
jinho['hasJob'] = true;
console.log(jinho.hasJob);

function printValue(obj, key) {
    console.log(obj.key);
    console.log(obj[key]);
}
printValue(jinho, 'name')
console.log('============');

// 3. Property value shorthand
const person1 = { name: '1', age: 1};
const person2 = { name: '2', age: 2};
const person3 = { name: '3', age: 3};
const person4 = makePerson('jinho', 26);
console.log(person4.name);
console.log(person4.age);

function makePerson(name, age) {
    return {
        name,
        age,
    };
}
console.log('============');

// 4. Constuctor Function
const person5 = new Person('jinho', 26);
console.log(person5.age);
console.log(person5.name);

function Person(name, age) {
    this.name = name;
    this.age = age;
}
console.log('============');

// 5. in operator (check key in object)
console.log('name' in jinho);
console.log('age' in jinho);
console.log('not' in jinho);
console.log('============');

// 6. for..in vs for..of
for (key in jinho) {
    console.log(key);
}

const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; ++i) {
    console.log(array[i]);
}

for (value of array) {
    console.log(value);
}
console.log('============');

// 7. Fun cloning
const user = { name: 'jinho', age: '26' };
const user2 = user;
user2.name = 'coder';
console.log(user2.name);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example -> assign은 뒤에 값을 덮어씀
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed)
console.log('============');

