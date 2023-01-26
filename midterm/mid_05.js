// output :
getBudgets([{
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
]);


getBudgets([{
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
]);


function getBudgets(arr) {
    let total = 0;
    for (let data of arr) {
        total += data['budget'];
    }
    console.log(total);
    return total;
}