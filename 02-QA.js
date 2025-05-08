// Question : How to implement class inheritance in javascript ?
// Answer :
// Use the extends keyword.
// means a creating a new class that reuses, extends, modifies 

// Example
class Car {
    constructor(model,name){
        this.model = model;
        this.name = name;
    }

    start(){
        console.log(this.name)
    }

    end(){
        console.log("Car stopped")
    }
}

class ElectricCar extends Car {
    
    drive(){
        console.log("Child method")
    }

    start(){
        super.start()
        super.end()
        this.drive()
    }
}

const newCar = new ElectricCar("2025","Tesla")

newCar.start() 
// Output: 
// Tesla
// Car stopped
// Child method