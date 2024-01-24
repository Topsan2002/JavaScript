
// optput 
// simplePair([1, 2, 3], 3);
// simplePair([1, 2, 3], 6);
// simplePair([1, 2, 3], 9);

function simplePair(arr, res) {
    //  ประกาศตัวแปร array แบบว่างไว้

    let data = [];

    arr.forEach(element => {
        arr.forEach(el => {
            if (element * el == res && element != el) {
                data.push([element, el]);
            }
        });
    });


   
    return data.length == 0 ? null : data;
}
console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3, 4, 5, 6], 6));
console.log(simplePair([1, 2, 3, 4, 5, 6], 9));