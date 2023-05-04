const Dealership = function(name, maxNumberOfCars, carsInStock){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.carsInStock = carsInStock;
} 

Dealership.prototype.countNumberOfCarsInStock = function(){
    console.log(this.carsInStock.length);
}

Dealership.prototype.addCarToStock = function(car){
    this.carsInStock.push(car);
}

// Return an array containing each car's manufacturer
// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock

// Dealership.prototype.getCarManufacturers = function(car){
    
// }

module.exports = Dealership;