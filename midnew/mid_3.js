function capToFont(text){
    // ประกาศเอาไว้เก็บตัวพิมพ์ใหญ่
    let upper = "";
    // ประกาศเอาไว้เก็บตัวพิมพ์เล็ก
    let lowwer = "";
    // เราทำการแปลงจาก string ไปเป็น array แล้วก็ให้มัน loop ออกมาทีละตัว
    // โดยค่าแต่บะตัวอยู่ที่ element
    text.split("").forEach(element => {
        // ทำการเช็คว่า ถ้า element เท่ากับ element ที่เป็นตัวพิมพ์ใหญ่
        // element.toUpperCase() คือ เปลี่ยนเป็นตัวพิมพ์ใหญ่ 
        // ถ้าเกิดเป็นพิมพ์เล็กให้ if จะเป็น  a == A (เป็นตัวำพิมพ์ใหญ่เพราะแปลงทีละบรรทัด)
        if(element = element.toUpperCase()){
            // ทำการเก็บเก็บค่า element ที่เป็นตัวพิมพ์ใหญ่
            // += คือการที่เรา เอาค่าเก่ามาบวกกับค่าใหม่    คือ ถ้ามี a = "1"; แล้วมาต่อเป็น a += "2";    จะได้เป็น a = "12"
            upper += element
        }else{
            // ไม่ตรงกับเงื่อนไขบน จะเป็นตัวพิมพ์เล็ก
            lowwer += element
        }
    });
    // return เป็นการส่งค่ากลับ  upper + lowwer เป็นการเอาตัวพิมพ์ใหญ่มารวมหับตัวพิมพ์เล็ก ที่เก็บไว้ในตัวแปร
    return upper + lowwer;
}


console.log(capToFont("hApPy"))
console.log(capToFont("moveMent"))
console.log(capToFont("shOrtCAKE"))