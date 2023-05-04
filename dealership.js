const Dealership = function(name, maxNumberOfCars, carsInStock){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.carsInStock = carsInStock;
} 

Dealership.prototype.countNumberOfCarsInStock = function(){
    return this.carsInStock.length;
}

Dealership.prototype.addCarToStock = function(car){
    if(this.carsInStock.length < this.maxNumberOfCars){
    // why do I not need a return statement here?
        this.carsInStock.push(car);
    } else {
        return "Not enough space";
    }
}

Dealership.prototype.getCarManufacturers = function(){
    return this.carsInStock.map(car => car.manufacturer);
}


Dealership.prototype.carFromSpecificManufacturers = function (manufacturerName){
    return this.carsInStock.filter(car => {
        if(car.manufacturer === manufacturerName){
            return car;
        } 
    })
}

Dealership.prototype.valueOfCars = function(){
    return this.carsInStock.reduce((accumulator, car) => {
        return accumulator + car.price
    }, 0);
}

Dealership.prototype.sellCar = function(customer, car){
    // if car is in stock
    if(this.carsInStock.includes(car)){
    // call customer method buyCar()
        customer.buyCar(car);
    // remove car from stock
        this.carsInStock.splice(0, 1, car);
        return customer.car;
    }

    // problems to think about in the morning: 
    // car is currently in an array, is it possible to just move it out?
}
module.exports = Dealership;