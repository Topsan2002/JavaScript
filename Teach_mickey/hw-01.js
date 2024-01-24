const num1 = "123456789";
const num2 = "13579"
const num3 = "1234567890"



function findNumber(numstr){

    let number4 = "0123456789".split("");
    console.log(number4);
    numArray = numstr.split("");
    console.log(numArray);

    numArray.forEach((element,index) => {
        console.log(element,index);

     
        number4.forEach((el,idx) => {
            if(el == element){
                console.log(el, "==", element, "??");
                number4.splice(idx, 1)
            }
        });
        console.log("=========");
    });

    return number4

}

console.log(findNumber(num1));
