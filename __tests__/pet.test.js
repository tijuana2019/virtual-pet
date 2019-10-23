const Pet = require("../src/pet");
const pet = new Pet("Fido");

describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });
    it("creates a new instance of Pet, with the name Fido", () => {
        expect(pet.name).toEqual("Fido");
    })
});