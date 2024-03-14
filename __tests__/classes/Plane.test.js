const Plane = require("../../classes/Plane");
const Person = require("../../classes/Person")
const { describe, it, expect } = require("@jest/globals");


describe("Testing Plane functionality", () => {
    const plane = new Plane("Example Airways", "LAX");

    it("should assign values correctly", () => {
        expect(plane.company).toBe("Example Airways");
        expect(plane.destination).toBe("LAX");
    });

    it("should initialize passengers array as empty", () => {
        expect(plane.passengers).toEqual([]);
    });

    it("should add a Person to the passengers array", () => {
        const person = new Person("John", "LAX");
        plane.addPassenger(person);
        expect(plane.passengers.length).toBe(1);
        expect(plane.passengers[0]).toBe(person);
    });
});