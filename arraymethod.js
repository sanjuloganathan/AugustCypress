// // array methods

// // Push

// var name =["sanju","loknath","san","vijay"]

// name.push("vij")
// console.log(name);

// // pop

// name.pop()
// console.log(name);


// unshift
// let ap =["jai","ajith","srini"]
// ap.unshift("sabari")
// console.log(ap);

// ap.shift()
// console.log(ap);



// concat

var prod=["choco","juice"]
var prod1=["biscuit","bread"]
var mergeprod = prod.concat(prod1)
console.log(mergeprod);


// Sort

let arr =[2,1,5,8,7,4,6,3,9,0]
arr.sort((a,b)=>a-b)
console.log(arr);


let arr1 =["sanju","Mohan","nitheesh","Deepika","Suresh"]
arr1.sort()
console.log(arr1);

// Split

var newsplt="Good morning"
var newsplt1=newsplt.split(" ")
console.log(newsplt1);


// join:

let newjoin=newsplt1.join("")
console.log(newjoin);


// Slice

const birds=["peacock","parrot","vulture","pigeon","eagle"]
console.log(birds.slice(2));

// Splice

const splice1=["sunday","monday","tuesday","thursday","saturday","sunday"]
splice1.splice(3,0,"wednesday")
splice1.splice(5,0,"friday")
console.log(splice1);


// Reverse

let con = "hello world!";
let rev = con.split("").reverse().join("")
console.log(rev);

// includes

const str1 = "Hello World!"
const includesword = str1.includes("Hel")
console.log(includesword);

// uppercase

let up="trend"
let upp=up.toUpperCase()
console.log(upp);


// Lower case

let lo="TREND"
let low =lo.toLowerCase()
console.log(low);


// indexof:

let idx = "javascript"
let newind=idx.indexOf("a")
console.log(newind);

// lastindexof

let idx1 = "javascript"
let newind1=idx1.lastIndexOf("a")
console.log(newind1);