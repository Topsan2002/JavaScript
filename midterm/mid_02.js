//out put : 
// highestDigit(379) = 9
// highestDigit(2) = 2
// highestDigit(377401)

highestDigit(379);
highestDigit(2);
highestDigit(377401);

function highestDigit(num) {
    let max = 0;
    for (let val of String(num)) {
        if (max < val) max = val;
    }
    // console.log(max);
    let value = String(num).split('').sort();
    //max = value[va]
    value.sort();
    console.log(value);
    return max;
}


console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
console.log(highestDigit(1));
console.log(highestDigit(8));
console.log(highestDigit(96455324));
console.log(highestDigit(13342));
console.log(highestDigit(1432677865));
console.log(highestDigit(13214341));