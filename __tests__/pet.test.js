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
    });

    it("increments the hunger of pet by 5 when it is called", () => {
       expect(pet.hunger).toEqual(5);
    });

    it("decreases the fitness of pet by 3 when it is called", () => {
        expect(pet.fitness).toEqual(7);
    });

    it("decreases the health of pet by 2 when it is called", () => {
        expect(pet.health).toEqual(8);
    }); 
    
describe("walk", () => {
    it("increases fitness by 4 when called, up to a maximum fitness of 10", () => {
        pet.fitness = 3;
        pet.walk();
        expect(pet.fitness).toEqual(7);
        

        pet.fitness = 6;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
    })
    });

