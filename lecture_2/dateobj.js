//Date function return millsecods that have elapsed 
//since midnight on January 1, 1970, UTC
// this exaple take 2 seconds to run

const start = Date.now();

console.log('starting timer...');
// expected output: starting timer...

setTimeout(() => {
    const mills = Date.now() - start;

    console.log(`seconds elapsed s= ${Math.floor(mills/1000)}`);
    // expected output : seconds elaped = 2
}, 2000);