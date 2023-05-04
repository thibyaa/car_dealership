const Dealership = require('./dealership');
const Car = require('./car');

let stephanJames;
beforeEach(() => {
    stephanJames = new Dealership("Stephan James", 200, []);
});

describe('Access Delearship properties', () => {
    test('get dealership name', () => {
        expect(stephanJames.name).toBe("Stephan James");
    });

    test('get capacity of dealership', () => {
        expect(stephanJames.maxNumberOfCars).toBe(200);
    });
})

// describe('Stock methods', () => {

// })