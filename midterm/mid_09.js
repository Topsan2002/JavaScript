// output : 
degitalClock(5025);
// 
degitalClock(61201);
// no am.pmm
degitalClock(87000);
// next day "00:00:00"

function degitalClock(num) {
    let str = "";
    hour = Math.floor(num / (60 * 60));
    min = Math.floor((num - (hour * 60 * 60)) / 60);
    sec = num - ((min * 60) + (hour * 60 * 60));
    if (hour > 12 & hour < 24) {
        str += `Not AM/PM 24 hour only : ${Math.floor(hour)}:${min}:${sec}`;
    } else if (24 < num / (60 * 60)) {
        hour -= 24;
        str += `Next Day : ${Math.floor(hour)}:${min}:${sec}`;
    } else {
        str += `${Math.floor(hour)}:${min}:${sec}`;
    }
    return str;
}

console.log(degitalClock(5025));
console.log(degitalClock(61201));
console.log(degitalClock(87000));