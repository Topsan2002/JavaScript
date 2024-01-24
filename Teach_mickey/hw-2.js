function sortMax(a,b){
    return b.sum - a.sum;
}

function findWords(words, chars) {
    //
    // YOUR CODE HERE
    let sum = [];
    let output = [];
    words.forEach(element => {
        let val = 0;
        element.match(chars)
        // for (let i = 0; i < element.length; i++) {
        //     chars.forEach((el)=>{
        //         if(el==element[i]){
        //             val += Number(el.charCodeAt(0))
        //         }
        //     });
        // }
        sum.push({'sum':val,'word':element});
    });   
    sum.sort(sortMax);
    sum.forEach((el,index)=>{
        output.push(el['word']);
    });


    return output;

}

const words = ["cherry", "date",  "honeydew",   "orange", "papaya"];
const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't'];


const result = findWords(words, characters);
console.log(result);

const words2 = ["date","fig","mango"];
const characters2 = ['a', 't', 'e', 'm', 'n', 'g', 'o', 'f', 'i'];

const result2 = findWords(words2, characters2);
console.log(result2);


const words3 = ["apple", "banana", "orange","kiwi"];
const characters3 = ['a', 'p', 'l', 'e', 'o', 'r', 'n', 'g'];

const result3 = findWords(words3, characters3);
console.log(result3);