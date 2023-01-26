function numberSplit(num) {
    (num % 2 == 0 ? arr = `[${num/2}, ${num/2}]` :
        arr = `[${Math.floor(num/2)}, ${Math.round(num/2)}]`);
    console.log(arr);
}

numberSplit(4);
numberSplit(10);
numberSplit(10);
numberSplit(-9);
//numberSplit(4) -> [2,2]
//numberSplit(10) -> [5,5]
//numberSplit(11) -> [5,6]
//numberSplit(-9) -> [-5,-4]