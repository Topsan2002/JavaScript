function promiseTimeOut(ms) {
    console.log('Asynchoronous work')
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
console.log('start');
promiseTimeOut(2000)
    .then(() => {
        console.log("Done!!!");
        return promiseTimeOut(3000);
    })
    .then(() => {
        console.log("Also done!!!");
        return Promise.resolve(42);
    }).then((result) => {
        console.log(`result : ${result}`);
    })
    .catch(() => {
        console.log("Error!");
    });

console.log("End")