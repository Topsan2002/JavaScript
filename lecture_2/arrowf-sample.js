// Arrow function with two arguments
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
}

console.log(sum(2, 5));

//Arrow function with no arguments 

const printHello = () => {
    console.log('Hello');
}

printHello();
//Arrow function with a  single argument
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight}`);
}
checkWeight(25); // Prints : Baggage weight : 25 kilograms.


// Concise arrow function
const multiply = (a, b) => a * b;

console.log(multiply(2, 30));