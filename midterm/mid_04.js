//out put :
// totalVolume([4,2,2],[3,3,3],[1,1,2],[2,1,1])
// 63
// totalVolume([2,2,2],[2,1,1])
// 10
// totalVolume([1,1,1])
// 1

function totalVolume(...res) {
    let total = 0;
    for (let arr of res) {
        const sumWithInitial = arr.reduce(
            (accumulator, currentValue) => accumulator * currentValue
        );
        total += sumWithInitial;
    }
    console.log(total);
    return total;
}

totalVolume([4, 2, 2], [3, 3, 3], [1, 1, 2], [2, 1, 1]);
totalVolume([2, 2, 2], [2, 1, 1]);
totalVolume([1, 1, 1]);