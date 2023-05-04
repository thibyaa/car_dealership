const Car = require('./car');
const Dealership = require('./dealership');
const Customer = require('./customer')

const stephanJames = new Dealership("Stephan James", 200, []);

const bmw330e = new Car("bmw", 30000, "1998cc");
const corsa = new Car('vauxhall', 5000, "1242cc");
stephanJames.addCarToStock(bmw330e);
stephanJames.addCarToStock(corsa);

const anna = new Customer('Anna', 50000);

console.log(stephanJames.sellCar(anna, bmw330e));