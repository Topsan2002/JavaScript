let value1 = ['Apple', 1, false];
let value2 = ['Fries', 2, true];
let value3 = ['Mars', 9, 'Apple'];

function check(value, value01) {
    let msg = 'not have';
    for (let val of value) {
        for (let val2 of value01)
            if (val === val2) msg += val + ', ';
    }
    return msg;
}
console.log('test 1 : \n');
console.log('Compare value 1  AND value2 : ', check(value1, value2));
console.log('Compare value 1  AND value3 : ', check(value1, value3));
console.log('Compare value 2  AND value3 : ', check(value2, value3));



console.log('\n\ntest 2 : \n');
let furniture = ['Table', 'Chairs', 'Couch'];
furniture.map((val) => {
    for (let char of val) console.log(char);
    console.log('\n');
})