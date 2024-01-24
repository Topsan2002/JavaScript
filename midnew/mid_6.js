// out put
console.log(removeDups([1, 0, 1, 0]))
console.log(removeDups(["The", "big", "cat"]))
console.log(removeDups(["John", "Taylor", "John"]))

// [ 1, 0 ]
// ['The', 'big', 'cat']
// ['John', 'Taylor']
function removeDups(arr) {
    //  ประกาศตัวแปร array แบบว่างไว้
    let data = [];
    // loop data เพราะรับมาเป็น array
    arr.forEach(element => {
        // data.includes(element) ใช้เท็คว่ามี element นี้ใน array หรือยัง ถ้ายังจะ push element เข้า array
        if (!data.includes(element)){
            data.push(element);
        } 
        
    });
    return data;

}