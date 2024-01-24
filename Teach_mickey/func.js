
function logSum(n1,n2){
    console.log(n1+n2);
}
function sum(num1=0, num2=0, num3=0){
    return num1+num2+num3;
}

const plus = (n1,n2)=>n1+n2;

logSum()

function Hello(name){
    return "Hello, "+name;
}
function aboutMe(name, sex, age){

    return `My name is ${name}\n${sex}\nAge : ${age}`;
}

console.log(Hello("Mickey")); // Hello, Mickey
console.log(Hello("Topsan")); // Hello, Topsan
// console.log(plus(1,2));
// console.log(sum(2,3,3));

// console.log(sum(2,3));
// console.log(sum());


console.log(aboutMe("Mickey","Female",21));
// My name is Mickey
// Female
// Age : 21


function vat(n){
    console.log("vat is %d" , n * 0.07);
}

vat(100) // vat is 7

function checkDigit(str){
    let check = "0123456789".match(/[0-9]/gi)
    str.match(/[0-9]/gi).forEach(element => {
        let id = check.findIndex((el)=>el==element)
        id != -1 ? check.splice(id,1) : ''
    });
    return str + (check.length ? 'Missing Digit = ' + check.toString() : 'has no missing digits' )
}
console.log(checkDigit("1234567e22222ee89"));
