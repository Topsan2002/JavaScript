// output :
console.log(getBudgets([{
    name: "John",
    age: 21,
    budget: 23000
},
{
    name: "Steve",
    age: 21,
    budget: 40000
},
{
    name: "Martin",
    age: 21,
    budget: 2700
}
]))

console.log(getBudgets([{
    name: "John",
    age: 21,
    budget: 29000
},
{
    name: "Steve",
    age: 21,
    budget: 32000
},
{
    name: "Martin",
    age: 21,
    budget: 1600
}
]))


function getBudgets(arr) {
// เอาไว้เก็บผลรวม
let total = 0;
// loop เพราะเป็น array เอาข้อมูลข้างใน
arr.forEach(element => {
    // บวกผลรวมการbudget ใน object
    total += element.budget;
    
});

return total;
}