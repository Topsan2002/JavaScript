function getVowls(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
        return 0;;
    }
    return m.length;
}

console.log(getVowls("seeeing"));
console.log(getVowls("seeeing"));