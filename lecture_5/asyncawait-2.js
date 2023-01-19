function premiseTimeout(ms) {
    console.log('Asynchoronous')
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
async function longRunningOperation() {
    // logic
    return 42;
}
async function run() {
    //logic
    console.log("Start!!");
    await premiseTimeout(2000);
    //try to take out and see
    const reponse = await longRunningOperation();
    console.log(reponse);

    console.log("Stop!!");
}
console.log("Before running")
run();
console.log("After running")