//out put :
// totalVolume([4,2,2],[3,3,3],[1,1,2],[2,1,1])
// 63
// totalVolume([2,2,2],[2,1,1])
// 10
// totalVolume([1,1,1])
// 1

function totalVolume(...res) {
    // ประกาศไว้เก็บผลรวมื
    let total_sum = 0;
    // เรารับมาเป็น array เลยต้อง loop เอาข้อมูล
    res.forEach(el=>{
        let total = 1;
        // loop เพื่อเอาข้อมูลใน array อีกทีเพราะเป็น array ซ่อน Array
        el.forEach((ele)=>{
            // คูณผลเก็บไว้ใน total
            total *= ele;
        })
        // เอาไว้เกํบผลบวก
        total_sum += total  
    });
    return total_sum;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]))
console.log(totalVolume([2, 2, 2], [2, 1, 1]))
console.log( totalVolume([1, 1, 1]))