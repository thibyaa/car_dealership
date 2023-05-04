const Car = require('./car');

const bmw330e = new Car("bmw", 30000, "1998cc");

describe('Car Manufacterer', () => {
    test('can get bmw330e name', () => {
        const expected = "bmw";
        const actual = bmw330e.manufactrer;
        expect(actual).toBe(expected);
    });
})

describe('Car Price', () => {
    test('can get bmw330e price', () => {
        expect(bmw330e.price).toBe(30000);
    });
})

describe('Car Engine', () => {
    test('can get bmw330e engine', () => {
        expect(bmw330e.engine).toBe("1998cc");
    })
})
