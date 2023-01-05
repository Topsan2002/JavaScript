const cat = {
    name: "pipey",
    age: 8,
    whatName() {
        return this.name;
    },
}

console.log(cat.whatName());
//Out : Pipey
cat.name = "Nezzar";
console.log(cat.whatName());