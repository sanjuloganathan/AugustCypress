// this : Current object reference

const obj ={
    name1 : "sanju",
    age : 27,
    getinfo : function() {
        console.log(this.name1);
        console.log(this.age);
    }
}

obj.getinfo();


// template literals :       backtick

const name2 = "sanju"
const age1 = 27
console.log(`the name is ${name2} and the age is ${age1}`);