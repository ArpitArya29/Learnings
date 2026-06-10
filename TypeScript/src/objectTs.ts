// contains the key - value pairs

const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}


type teaType = {
    name: string;
    price: number;
    ingedrients: string[]
}

const adrakChai: teaType = {
    name: "Adrak Chai",
    price: 25,
    ingedrients: ["ginger", "tea leaves"]
}


type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}
let bigCup = {size: "500ml", material: "steel"}
console.log(smallCup, bigCup);


smallCup = bigCup // allowed because the bare-minimum properties are fulfilling
console.log(smallCup, bigCup);

type User = {
    name: string;
    password: string;
}

const user1: User = {
    name: "John Doe",
    password: "123456" // password is required, it must be given to fulfil the type User
}

type Item = {
    name: string;
    quantity: number;
}

type Address = {
    street: string;
    pin: number;
}

type Order = {
    id: string;
    items: Item[]; // best practice in typescript, which represents the seperation and code clarity
    address: Address;
}

const order1: Order = {
    id: "12345",
    items: [
        {name: "Tea", quantity: 2},
        {name: "Coffee", quantity: 1}
    ],
    address: {
        street: "123 Main St",
        pin: 12345
    }
}

// partial and required

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with", updates);
}

updateChai({price: 30}); // only price is updated, other properties are optional

updateChai({isHot: false}); // only isHot is updated, other properties are optional

type chaiOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required<chaiOrder>) => {
    console.log("Placing order for", order);
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})


// Pick and omit

const chaiMenu: Chai[] = [
    {name: "Masala Chai", price: 20, isHot: true},
    {name: "Ginger Tea", price: 25, isHot: true},
    {name: "Lemon Tea", price: 15, isHot: false}
]


// the extended datatype from chai which only contains some of the pre-specified properties
type ChaiNameAndPrice = Pick<Chai, "name" | "price">; // only name and price are picked from Chai type

const chaiNameAndPrice: ChaiNameAndPrice = {
    name: "Masala Chai",
    price: 20
}

// the extended datatype from chai which only contains some of the pre-specified properties, in this case isHot is omitted
type ChaiWithoutIsHot = Omit<Chai, "isHot">; // isHot is omitted from Chai type

const chaiWithoutIsHot: ChaiWithoutIsHot = {
    name: "Ginger Tea",
    price: 25
    // isHot: true // error because isHot is omitted from ChaiWithoutIsHot type
}