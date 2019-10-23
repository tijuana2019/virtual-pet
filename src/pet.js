function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.health = 10;
    this.MAXIMUM_FITNESS = 10;
    this.MINIMUM_FITNESS = 3;
    this.MINIMUM_HUNGER = 0;
    this.MAXIMUM_HUNGER = 5;
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    this.health -= 2;
};

Pet.prototype.walk = function() {
    if(this.fitness === this.MAXIMUM_FITNESS) {
        return this.fitness;
    } else if (this.fitness === 7 || this.fitness === 8 || this.fitness === 9) {
        this.fitness += (this.MAXIMUM_FITNESS - this.fitness);
    } else {
        this.fitness += 4;
    };
};

Pet.prototype.feed = function() {
    if(this.hunger <= this.MINIMUM_HUNGER) {
        return this.hunger;
    } else {
        this.hunger -= 3;
    };
};

Pet.prototype.checkUp = function() {
    if(this.fitness <= this.MINIMUM_FITNESS && this.hunger >= this.MAXIMUM_HUNGER) {
        return "I am hungry and I need a walk";
    } else if(this.fitness < this.MINIMUM_FITNESS && this.hunger < this.MAXIMUM_HUNGER) {
        return "I need a walk";
    } else if(this.fitness >= this.MINIMUM_FITNESS && this.hunger <= this.MAXIMUM_HUNGER) {
        return "I am hungry";
    } else {
        return "I feel great!";
    };   
};



module.exports = Pet;