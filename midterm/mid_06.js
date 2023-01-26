// out put
removeDups([1, 0, 1, 0]);
removeDups(["The", "big", "cat"]);
removeDups(["John", "Taylor", "John"]);

// [ 1, 0 ]
// ['The', 'big', 'cat']
// ['John', 'Taylor']
function removeDups(arr) {
    let data = [];
    for (let val of arr) {
        if (!data.includes(val)) data.push(val);
    }
    console.log(data);
    return data;

}