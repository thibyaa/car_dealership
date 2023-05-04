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

// this method doesn't work
Dealership.prototype.valueOfCars = function(){
    this.carsInStock.reduce((accumulator, car) => {
        console.log(accumulator + car.price)
    }, 0);
}

module.exports = Dealership;