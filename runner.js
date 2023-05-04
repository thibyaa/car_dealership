const Car = require('./car');
const Dealership = require('./dealership');

const stephanJames = new Dealership("Stephan James", 200, []);
const bmw330e = new Car("bmw", 30000, "1998cc");
const bmw30e = new Car("bmw", 300, "19cc");
const corsa = new Car('vauxhall', 5000, "1242cc");
stephanJames.addCarToStock(bmw330e);
stephanJames.addCarToStock(bmw30e);
stephanJames.addCarToStock(corsa);

console.log(stephanJames.valueOfCars());