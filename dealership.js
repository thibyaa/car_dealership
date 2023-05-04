const Dealership = function(name, maxNumberOfCars, carsInStock){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.carsInStock = carsInStock;
} 

Dealership.prototype.countNumberOfCarsInStock = function(){
    return this.carsInStock.length;
}

Dealership.prototype.addCarToStock = function(car){
    this.carsInStock.push(car);
}

Dealership.prototype.getCarManufacturers = function(){
    this.carsInStock.map(car => console.log(car.manufacturer));
}


Dealership.prototype.carFromSpecificManufacturers = function (manufacturerName){
    this.carsInStock.map(car => {
        if(car.manufacturer === manufacturerName){
            console.log(car);
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