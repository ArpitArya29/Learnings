// IN FUNCTIONS, TYPESCRIPT AUTOMATICALY INFERS THE RETUEN TYPE OF THE VALUE

// function makeChai(type: string, cups: number) {
//     console.log(`Making ${cups} Cup ${type} Chai`);
// }

// makeChai("Masala", 4);

function getChaiPrice(): number {
    return 25
}

console.log(`Price of chai: ${getChaiPrice()}`);

function makeOrder(order: string) {
    if(!order) return null;

    return order;
}

console.log(makeOrder("Some chai"));


// Logger function
function logChai(): void {
    console.log("Chai is ready");
}

// Optional parameter
function orderChai(type?: string) {
    if(!type) return `Preparing default chai`
    
    return `Preparing ${type} chai`
}

console.log(orderChai());
console.log(orderChai("Special Chai"));


// Default Parameter
function makeChai(type: string = "Normal Chai") {
    return `Preparing ${type} chai`
}

console.log(makeChai());
console.log(makeChai("Adrak wali"));

// type orderType = {
//     type: string;
//     sugar: number;
//     size: "small" | "large"
// }

function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}): boolean {
    return true;
}

console.log(createChai({type: "Masala", sugar: 2, size: "large"}));
