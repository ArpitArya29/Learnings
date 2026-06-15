const chaiFlavours: string[] = ['Strawberry', 'Vanilla', 'Chocolate', 'Mint'];
const chaiPrice: number[] = [20, 25, 30, 35];

const rating: Array<number> = [4.5, 4.0, 5.0, 3.5];

const isAvailable: boolean[] = [true, false, true, true];

console.log(chaiFlavours);
console.log(chaiPrice);

type Chai = {
    name: string;
    price: number;
}

// typically like array of objects
const menu: Chai[] = [
    {name: "Masala Chai", price: 20},
    {name: "Ginger Tea", price: 25},
    {name: "Lemon Tea", price: 15}
]

console.log(menu);

const cities: readonly string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai'];

// cities.push("Kolkata"); // error because cities is a readonly array
// cities[0] = "Kolkata"; // error because cities is a readonly array
console.log(cities);


const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(table);


// TUPLES
let chaiTuple: [string, number] = ["Masala Chai", 20]; // tuple with string and number
console.log(chaiTuple);
chaiTuple = ["Ginger Tea", 25]; // valid
// chaiTuple = [30, "Lemon Tea"]; // error because the order of types is not correct

// readonly tuples
const location: readonly [number, number] = [28.6139, 77.2090]; // readonly tuple for latitude and longitude
// location[0] = 30.0; // error because location is a readonly tuple
console.log(location);

const chaiItems: [name: string, price: number] = ["Masala Chai", 20]; // tuple for chai items
console.log(chaiItems);


// Enums
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE;

enum Status {
    PENDING = 100,
    SERVED, // automatically stores 101
    CANCELLED // automatically stores 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType) {
    console.log(`making ${type} chai`);
}

makeChai(ChaiType.GINGER);
makeChai(ChaiType.MASALA);
// makeChai("masala") // Error because it only accepts the values from enum

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

let t: [string, number] = ["chai", 10]
t.push("extra") // it gives some unexpected behaviour as extra values can be pushed into tuple 


