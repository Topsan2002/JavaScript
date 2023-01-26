// output :
sumTwoSmallNums([19, 5, 42, 2, 77]);
sumTwoSmallNums([10, 34344535, 3453445, 3453545343453]);
sumTwoSmallNums([2, 9, 6, -1]);
sumTwoSmallNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])

function sumTwoSmallNums(arr) {
    let keep = [];
    for (let val of arr) {
        if (val >= 0) keep.push(val);
    }
    // keep = 
    keep.sort();
    console.log(keep);
    // return keep[0] + keep[1];
    // let data = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < 0) {
    //         arr.splice(i, 1)
    //     };
    // }
    // for (let val of arr) {
    //     if (val > 0 && data.length < 2) data.push(val);;
    // }
    // console.log(data[0] + data[1]);

    // console.log(arr);

}


console.log(sumTwoSmallNums([19, 5, 42, 2, 77]));