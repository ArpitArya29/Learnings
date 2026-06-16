interface Chai {
    flavour: string
    price: number
    milk?: boolean
}

const masalaChai: Chai = {
    flavour: "masala",
    price: 30,
    milk: true
}

// Interface procides the blueprint of the object 
interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {
    id: 1, // It initiates, but not it can be changes later, as it is readonly
    name: "Some Shop"
}

// s.id = 2 // throws an error as id is readonly

interface DiscountCalculator {
    (price: number) : number
}

const APPLY50: DiscountCalculator = (p) => p * 0.5

let discountedPrice = APPLY50(250);
console.log(discountedPrice);


interface TeaMachine {
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log("Starting the machine...");
    },
    stop() {
        console.log("Stopping the machine...");
    },
    // no extra properties rather than interfaces are allowed to be used
    // someOtherMethod() {
        
    // }
}

const realMachine = {
    start() {
        console.log("Starting...");
    },
    stop() {
        console.log("Stopping...");
    },
    otherFeatures() {
        console.log("Other specific features...");
    }
}

const machine2: TeaMachine = realMachine // it only allows because it fulfuls the minimum requirements for the teamachine
// machine2.otherFeatures // could not access the properties because it is not into the interface


interface ChaiRatings {
    [flavour: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 2.0,
    // adrak: "4" // gives error, as it is expecting the value as the number
}


interface User {
    name: string
}

interface User {
    age: number
}

// it merges automatically merges the interfaces
const u : User = {
    name: "Arya",
    age: 24
}


interface A {a: string}
interface B {b: string}

interface C extends A, B {} // interface can also be inherited