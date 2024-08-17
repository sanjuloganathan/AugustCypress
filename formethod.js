// for methods :
// 1. for each
// syntax :
// variable_name.forEach((value,index,actualarray)=> );

// let arr =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// arr.forEach((val,ind,acc)=>console.log(val))

// for in :

const obj ={
    name1 : "Titanic",
    year : 1990,
    director : "James Cameron",
    award : "oscar"
}
for(let x in obj){
    console.log(x + "="+obj[x])
}


// for of :

// syntax :
// for(variable name refname of strname){
// statement code
//}

const str="javascript"
for (const x of str) {
    console.log(x);
    
}