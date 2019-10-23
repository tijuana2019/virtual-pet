function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.health = 10;
    this.MAXIMUM_FITNESS = 10;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    this.health -= 2;
}

Pet.prototype.walk = function() {
    if(this.fitness === this.MAXIMUM_FITNESS) {
        return this.fitness;
    } else if (this.fitness === 7 || this.fitness === 8 || this.fitness === 9) {
        this.fitness += (this.MAXIMUM_FITNESS - this.fitness);
    } else {
        this.fitness += 4;
    }
    }




module.exports = Pet;