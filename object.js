// const obj ={
//     //key : value
//     name1 : "sanju",
//     age :27,
//     dep : "QA",
//     salary : 50000,
//     address : "chennai"

// }

// console.log(obj.name1);
// console.log(obj.age);
// console.log(obj.dep);
// console.log(obj.salary);


// change the values

// const obj ={
//     //key : value
//     name1 : "sanju",
//     age :27,
//     dep : "QA",
//     salary : 50000,
//     address : "chennai"

// }

// obj.name1 = "mohan",
// obj.age =25,
// obj.dep ="dev"

// console.log(obj);

// // keys
// let key = Object.keys(obj)
// console.log(key);

// // values

// let value =Object.values(obj)
// console.log(value);


// multiple object

// const obj =[{
//     //key : value
//     name1 : "sanju",
//     age :27,
//     dep : "QA",
//     salary : 50000,
//     address : "chennai"

// },
// {
//     name1 : "loknath",
//     age :25,
//     dep : "QA",
//     salary : 50000,
//     address : "kerala"
// },
// {
//     name1 : "mohan",
//     age :25,
//     dep : "QA",
//     salary : 50000,
//     address : "chennai"
// }
// ]

// obj[2].name1 ="san"
// obj[2].age ="25"
// console.log(obj[2]);

// destructuring object


// const obj =[{
//     //key : value
//     name1 : "sanju",
//     age :27,
//     dep : "QA",
//     salary : 50000,
//     address : "chennai"

// },
// {
//     name1 : "loknath",
//     age :25,
//     dep : "QA",
//     salary : 50000,
//     address : "kerala"
// },
// {
//     name1 : "mohan",
//     age :25,
//     dep : "QA",
//     salary : 50000,
//     address : "chennai"
// }
// ]

// const {name1,dep,address}=obj[1]
// console.log(name1);
// console.log(dep);
// console.log(address);


// task

const obj =[{
        //key : value
        name1 : "sanju",
        age :27,
        dep : "QA",
        salary : 50000,
        address : "chennai"
    
    },
    {
        name1 : "loknath",
        age :25,
        dep : "QA",
        salary : 50000,
        address : "kerala"
    },
    {
        name1 : "mohan",
        age :25,
        dep : "QA",
        salary : 50000,
        address : "chennai"
    },
    {
        name1 : "nithish",
        age :26,
        dep : "QA",
        salary : 50000,
        address : "chennai"
    },
    {
        name1 : "deepika",
        age :26,
        dep : "QA",
        salary : 50000,
        address : "chennai"
    }
    ]
    
    obj[3].name1 ="san"
    obj[4].name1 ="dee"
    const {name1,age,dep,salary,address}=obj[3]
    console.log(name1);
    console.log(age);
    console.log(dep);
    console.log(salary);
    console.log(address);
    

    // arraydestructure :

    const arr =["sun","moon","stars","planets"]
    const [s,m,S,p]=arr
    console.log(s);
    console.log(m);
    console.log(S);
    console.log(p);


