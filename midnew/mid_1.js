function numberSplit(num){
    // Math.floor() ทำหน้าที่ปัดทศนิยมลง
    // Math.round() ทำหน้าที่ปัดทศนิยขึ้น
    // return เป็น Array คือ [   ]
    return [Math.floor(num/2), Math.round(num/2)];
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));