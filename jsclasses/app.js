class Dog {
    constructor(newName, newBreed, newCollar, newAge, newCuteness = true){
        this.name = newName;
        this.breed = newBreed;
        this.collar = newCollar;
        this.age = newAge;
        this.cuteness = newCuteness;

        Dog.numberOfDogs++;
    }

    static #numberOfDogs = 0;

    // read only unless a setter
    static get numberOfDogs(){
        return Dog.#numberOfDogs;
    }
    
    static set numberOfDogs(newValue){
        return Dog.#numberOfDogs++;
    }

    static resetDogCount(){
        Dog.numberOfDogs = 0;
    }

    // no function name
    bark(){
        console.log("Woof! I am a " + this.name);
        throw new BarkError(this.name, this.breed)
    }
}

class NumberOfDogsError extends Error{
    constructor(){
        super("Cannot modify the number of dogs unless you're creating a dog via the Dog constructor.");
    }
}

let fido = new Dog("Fibo", "Frenchie", "leather", 7);

// wont do anything because no set function
// Dog.numberOfDogs = 10

console.log(Dog.numberOfDogs);


// console.log(fido);
// console.log(fido.cuteness);

// fido.bark()

// let someExampleError = new Error()

class BarkError extends Error {
    constructor(dogName, dogBreed){
        super(`${dogName} of breed ${dogBreed} failed to bark.`)
    }
}

try {
    fido.bark();
} catch (error){
    // throw new BarkError(fido.name, fido.breed);
    
    if (error instanceof BarkError){
        console.log("Bark error occured.");
    }

}

// class capital 
// Math.random();