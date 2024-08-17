// function tern(x){
//     let limit = (x<18) ? "u r not eligible to vote" : "u r eligible to vote"
//     console.log(limit) 
// }
// tern(15);

// // function expression :

// var num = function(){//=> anonymous function
//     console.log("Javascript");
// }
// num()

// // First Class function 

// function newval(x){
//     return x
// }
// function addfn(fn){     // fn = first function x 2
//     console.log(fn(2))
// }
// addfn(newval)

// square of value in first class function => Task

// Immediate invoke function

// (function(para){
//     console.log(para);
// })("good evening")

// // Arrow function :
// //syntax :
// // () => {}
//     var newarrfn = (x)=>{console.log(x)}
//     newarrfn("im argues")


    function newval(x){
             return x*x
         }
         function addfn(fn){     // fn = first function x 2
             console.log(fn(5))
         }
         addfn(newval)