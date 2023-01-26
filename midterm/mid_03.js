// output :
// capToFront("hApPy") -> APhpy
// capToFront("moveMENT") -> MENTmove
// capToFront("shOrtCAKE") -> OCAKEshrt

function capToFront(str) {
    let up = "",
        low = "";
    for (let val of str) {
        if (val == val.toUpperCase()) {
            up += val;
        } else {
            low += val;
        }
    }
    console.log(up + low)
}

// capToFront("ssAAA")
capToFront("hApPy")
capToFront("moveMENT")
capToFront("shOrtCAKE")