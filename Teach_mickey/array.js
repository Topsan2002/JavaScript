let animal = ['dog', 'cat', 'mickey'];

let num = [1, 2, 3];

let obj = [
    { name: 'top' },
    { name: 'mickey' }
];

// animal.forEach(el => {
//     console.log(el);
// });

for (let index = 0; index < animal.length; index++) {
    const element = animal[index];
    console.log(element);
}
// obj.forEach(el => {
//     console.log(el);
//     console.log(el.name);
// });



animal.forEach((el, index) => {
    console.log(el);
    console.log(index);
});