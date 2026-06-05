type chaiOrderType = {
    type: string,
    sugar: number,
    strong: boolean
}

function makeChai(order: chaiOrderType) {
    console.log(order);
}

function serveChai(order: chaiOrderType) {
    console.log(order); 
}

// type teaRecipe = {
//     water: number,
//     milk: number
// }

// class MasalaChai implements teaRecipe {
//     water = 10;
//     milk = 5;
// }


interface teaRecipe {
    water: number,
    milk: number
}

class MasalaChai implements teaRecipe {
    water = 10;
    milk = 5;
}


// type cupSize = "small" | "large"
interface CupSize {
    size: "small" | "large"
}

class Chai implements CupSize {
    size: "small" | "large" = "large";
}


interface Response {
    ok: true | false
}

class myRes implements Response {
    ok: boolean = false;
}

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type masalaChai = BaseChai & Extra

const cup: masalaChai = {
    teaLeaves: 2,
    masala: 0,
}

console.log(`Your custom cup with ${cup.teaLeaves} Tea Leaves with ${cup.masala} Masala`);

type User = {
    username: string,
    bio?: string // used for the optional value, but when assigned, it must be of the string type
}

const user1: User = {
    username : "User1"
}

const user2: User = {
    username: "User2",
    bio: "bio of the user"
}

type config = {
    readonly name: string,
    version: number
}

const app1: config = {
    name: "App 1",
    version: 1
}

console.log(`${app1.name} with version ${app1.version}`);


// app1.name = "App2" // throws error, because this property is readonly
app1.version = 2; // this is allowed, because it can be changed
console.log(`${app1.name} with version ${app1.version}`);