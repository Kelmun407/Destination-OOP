const Bag = require("../../classes/Bag");
const { describe, it, expect } = require("@jest/globals")

describe('testing bag funcionality', () =>{

    const bag1 = new Bag(10, 1);
    it('should create an instance of the Bag class ', () => {
        expect(bag1).toBeInstanceOf(Bag);
    });


    it('should assign values correctly', () =>{
        expect(bag1.weight).toBe(10);
        expect(bag1.id).toBe(1);
    });

    it('should initiate owner as null', () => {
        expect(bag1.getOwner()).toBe(null);

    });

    it('should assign owner to the bag', () => {
        const person = { name: 'John', age: 30 };
        bag1.assignOwner(person);
        expect(bag1.getOwner()).toBe(person);
    });
   
})
