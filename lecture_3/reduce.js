const arrayOfNumber = [1, 2, 3, 4];

const sum = arrayOfNumber.reduce((accnulator, currenValue) => {
    console.log(`${accnulator} :: ${currenValue}  `);
    // console.log(currenValue);
    return accnulator + currenValue;
});

console.log(sum);