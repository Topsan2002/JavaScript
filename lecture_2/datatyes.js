const people = ['Aaron', 'Mel', 'John'];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
    fristName: "Topsan",
    lastName: "Srichum",
};

function sayHello(preson) {
    console.log("Hello  ," + preson.fristName);
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);