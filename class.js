'use strict';

// Class: Template
// Object: Instance of a class

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const jinho = new Person('jinho', 26);
console.log(jinho.name);
console.log(jinho.age);
jinho.speak();
console.log('============');

// 2. Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('jinho', 'kim', -1);
console.log(user1.age);
console.log('============');


// 3. Fields(public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
console.log('============');

// 4. Static
class Article {
    static publisher = 'jinho';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher)
Article.printPublisher();
console.log('============');

// 5. Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log("hi triangle");
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
console.log('============');

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());