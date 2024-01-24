const nums1 = [3, 2, 3, 1] ; //--> [0,2]
const nums2 = [1, 2, 1, 3, 5, 6, 4]; //--> [1,5]
const nums3 = [1, 2, 1, 4, 5, 6, 4, 7];//--> [1,5,7]


function findPeak(num){
    let peak = [];
    num.forEach((el,idx) => {
        (idx >= 0 && idx+1 <= num.length ? 
            el > num[idx+1] ? 
                peak.push(idx) :
            idx > 0 && num[idx+1] < el && num[idx-1] < el ? 
                peak.push(idx) : 
            idx+1 == num.length && num[idx-1] < el ? 
                peak.push(idx) : "" :"")
    });

    return peak;
}

console.log(findPeak(nums1));
console.log(findPeak(nums2));
console.log(findPeak(nums3));