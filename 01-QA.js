// Question : How to define class with a properties and methods in Javascript ?
// Answer:
// => A class method is just a function inside a class
// => to create new objects by using new keyword

// Example
class Car {
    constructor(model,name){
        this.model = model;
        this.name = name;
    }
    drive(){
        console.log(`Name of the car is ${this.name}`)
    }
}

const car1 = new Car("2025","BMW")

car1.drive()  // Name of the car is BMW