// optput 
simplePair([1, 2, 3], 3);
simplePair([1, 2, 3], 6);
simplePair([1, 2, 3], 9);

function simplePair(arr, res) {
    let data = [];
    for (let val of arr) {
        for (let val2 of arr) {
            if (val * val2 == res && val != val2) {
                data.push([val, val2]);
            }
        }
    }
    // console.log(data);
    return data.length == 0 ? null : data;
}
console.log(simplePair([1, 2, 3, 4, 5, 6], 3));
console.log(simplePair([1, 2, 3, 4, 5, 6], 6));
console.log(simplePair([1, 2, 3, 4, 5, 6], 9));