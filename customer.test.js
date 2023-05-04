const Dealership = require('./dealership');
const Car = require('./car');
const Customer = require('./customer');

let stephanJames;
let bmw330e;
let anna;

beforeEach(() => {
    stephanJames = new Dealership("Stephan James", 200, []);
    bmw330e = new Car("bmw", 30000, "1998cc");
    anna = new Customer('Anna', 50000);
});

describe('Access customer properties', () => {
    test('get customer name', () => {
        expect(anna.name).toBe('Anna');
    });

    test('update customer name', () => {
        anna.name = "Zsolt";
        expect(anna.name).toBe('Zsolt');
    });

    test('get wallet amount', () => {
        expect(anna.wallet).toBe(50000);
    });

    test('update wallet', () => {
        anna.wallet = 0;
        expect(anna.wallet).toBe(0);
    });
});

describe('Customer associated methods', () => {
    test('customer can buy a car', () => {
        const expected = {"engine": "1998cc", "manufacturer": "bmw", "price": 30000};
        const actual = anna.buyCar(bmw330e);
        expect(actual).toEqual(expected);
    });
});