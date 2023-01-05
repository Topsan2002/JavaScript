//Object clonnig
// object Ref, Obj Clonning assign(), {... x} JSON

const obj = {
    person: "Topsan",
    weight: 85
}

// const obj2 = obj; // obj2 -> obj ==- same object not create new object
const obj2 = Object.assign({}, obj);
// const obj2 = {...obj };
obj2.weight = 75;
console.log(obj);
console.log(obj2);