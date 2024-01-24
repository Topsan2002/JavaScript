function highestDigit(num){
    // แปลง paranmeter num จาก Number เป็น string จาก 1234 เป็น "1234"
    num = String(num);
    // แปลงจาก  sting ให้เป็น array จาก "1234" เป็น [1,2,3,4]
    num = num.split("")
    // sort เป็นการทำให้เรียงจากน้อยไปมาก เป็น defualt
    num.sort() 
    // num เป็นตัวแปร array num[เลขindex] เราต้องการค่าที่มากที่สุด
    // num.length เราจะได้ขนาดของ array แล้วนำมา -1 เพื่อเอา index สุดท้าย
    // รวมกันเป็น num[index สุดท้าย] = ค่าที่มากที่สุด
    return num[num.length-1]
    
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));