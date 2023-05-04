const Car = require('./car');

let bmw330e;

beforeEach(() => {
    bmw330e = new Car("bmw", 30000, "1998cc");
});

describe('Access/Modification of Car Properties', () => {
    test('can get bmw330e name', () => {
        const expected = "bmw";
        const actual = bmw330e.manufacturer;
        expect(actual).toBe(expected);
    });

    test('change manufacturer name', () => {
        bmw330e.manufacturer = "toyota";
        expect(bmw330e.manufacturer).toBe("toyota");
    });

    test('can get bmw330e price', () => {
        expect(bmw330e.price).toBe(30000);
    });

    test('change bmw330e price', () => {
       bmw330e.price = 29000
       expect(bmw330e.price).toBe(29000);
    });

    test('can get bmw330e engine', () => {
        expect(bmw330e.engine).toBe("1998cc");
    });

    test('can change engine', () => {
        bmw330e.engine = '2978cc';
        expect(bmw330e.engine).toBe('2978cc');
    })

})
