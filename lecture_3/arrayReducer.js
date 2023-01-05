const array = [15, 16, 17, 18, 19];

function reducer(accmulator, currenValue, index) {
    const returns = accmulator + currenValue;
    console.log(`accmulator: ${accmulator}, currenetValue: ${currenValue} , index: ${index}, returns: ${returns}`);
    return returns;
}

array.reduce(reducer)