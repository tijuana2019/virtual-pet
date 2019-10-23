const Pet = require("../src/pet");
const pet = new Pet("Fido");

describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });
    it("creates a new instance of Pet, with the name Fido", () => {
        expect(pet.name).toEqual("Fido");
    });

    it("assigns an initial age of 0 to each new pet", () => {
        expect(pet.age).toEqual(0);
    });
    })
describe("growUp", () => {
    it("increments the age of pet by 1 year when it is called", () => {
        pet.growUp();
        expect(pet.age).toEqual(1);
    })
});