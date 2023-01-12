const person = {
    name: 'Topsan',
    weight: 85,
}

function sayHello(person) {
    console.log("Hello World!");
}

function cube(x) {
    return x * x * x;
}
const add = (a, b) => a + b;

const status = true;

module.exports = { person, sayHello, cube, add, status };

const hello = require('./libHello');

hello.sayHello();
console.log(hello.person.name);
console.log(hello.cube(3));
console.log(hello.add(4));
console.log(hello.status);