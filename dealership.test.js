const Dealership = require('./dealership');
const Car = require('./car');

let stephanJames;
let bmw330e;
let corsa;

beforeEach(() => {
    stephanJames = new Dealership("Stephan James", 200, []);
    bmw330e = new Car("bmw", 30000, "1998cc");
    corsa = new Car('vauxhall', 5000, "1242cc");
});

describe('Access Delearship properties', () => {
    test('get dealership name', () => {
        expect(stephanJames.name).toBe("Stephan James");
    });

    test('change dealership name', () => {
        stephanJames.name = 'Car Giant';
        expect(stephanJames.name).toBe("Car Giant");
    });

    test('get capacity of dealership', () => {
        expect(stephanJames.maxNumberOfCars).toBe(200);
    });

    test('get capacity of dealership', () => {
        stephanJames.maxNumberOfCars = 350;
        expect(stephanJames.maxNumberOfCars).toBe(350);
    });
})

describe('Stock associated functions', () => {
    test('checking number of cars in stock', () => {
        expect(stephanJames.countNumberOfCarsInStock()).toBe(0);
    });

    test('can add car to stock', () => {
        stephanJames.addCarToStock(bmw330e);
        stephanJames.addCarToStock(corsa);
        expect(stephanJames.countNumberOfCarsInStock()).toBe(2);
    });
})

describe('Car associated functions', () => {
    test('check manufacturer', () => {
        stephanJames.addCarToStock(bmw330e);
        expect(stephanJames.getCarManufacturers()).toBe("bmw");
    });

    test.skip('get by manufacturer name', () => {
        stephanJames.addCarToStock(bmw330e);
        expect(stephanJames.carFromSpecificManufacturers('bmw').toStrictEqual({ 
            manufacturer: 'bmw', price: 30000, engine: '1998cc' }));
    });

})