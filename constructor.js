// function Car(name,year,model) {
//     // key    //value
//     this.name = name
//     this.year = year
//     this.model = model
    
// }
// const cardet =new Car("bmw",2020,"320d")
// console.log(cardet);


// function Car1(name,year,model) {
//     // key    //value
//     this.name = name
//     this.year = year
//     this.model = model
//     this.getinfo = function() {
//         console.log(`the name is ${name} and the year is ${year}and the model is ${model}`);
        
//     }
    
// }
// const cardet1 =new Car1("bmw",2020,"320d")
// console.log(cardet);
// cardet1.getinfo()


//class

class Student{
    constructor(name,age,year){
        this.name =name
        this.age =age
        this.year=year
    }
    getstdinfo(){
        console.log(`the name of the student is ${this.name} and the age is ${this.age} and the batch year is ${this.year}`);
    }
}
const Studentdet =new Student("sanju",27,2020)
Studentdet.getstdinfo();


// Settimeout :

setTimeout(() => {
    console.log("Javascript");
    
}, 2000);
