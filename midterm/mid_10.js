//output :
// isValidIP("1.2.3.4");
// isValidIP("1.2.3");
// isValidIP("1.2.3.4");
// isValidIP("1.2.3.4");
// isValidIP("1.2.3.4");

function isValidIP(ip) {
    let arr = ip.split('.');
    if (arr.length > 4 || arr.length < 4) return false;
    else {
        for (let val of arr) {
            if (255 < val || val.indexOf(0) != -1) {
                return false;
            }
        }
    }
    return true;
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.67.90"));
console.log(isValidIP("123.056.67.089"));