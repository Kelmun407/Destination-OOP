const Airport = require('../../classes/Airport');

describe("Airport Tests", () => {
    const mia = new Airport('Miami', 'MIA')

    test("Check if instance of Airport is Created", () => {
        expect(mia instanceof Airport).toBe(true);
    })
    test("Check if airport name is accurate", () =>{
        expect(mia.name).toEqual('Miami');
    })
    test("Check if Airport Code is accurate", () =>{
        expect(mia.airportCode).toEqual('MIA');
    })
    test("Check if you can getPlanes", () => {
        expect(mia.getPlanes()).toEqual([]);
    })
    test("Check if you can add a plane to array", () =>{
        mia.addPlane('Boeing');
        expect(mia.getPlanes()).toEqual(['Boeing'])
    })

})
