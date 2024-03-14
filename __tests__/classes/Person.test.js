const Person = require('../../classes/Person');

describe("Person tests", () =>{
    const david = new Person('David', 'Colorado');

    test("Check instance of person class", () =>{
        expect(david instanceof Person).toBe(true);
    })
    test("Check name of person class", () => {
        expect(david.name).toBe('David');
    })
    test("Check destination of person class", () => {
        expect(david.destination).toBe('Colorado');
    })
    test("Can get bag array", () => {
        expect(david.getBags()).toEqual([]);
    })
    test("Can add bag to bag array", () => {
        david.addBag(1);
        expect(david.getBags()).toEqual[1];
    })
})


