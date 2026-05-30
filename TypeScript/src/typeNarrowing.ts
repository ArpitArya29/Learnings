// It is the process of refining a variable to a more specific type within a certain scope. 

// It allows us to narrow down the type of a variable based on certain conditions or checks, making it easier to work with and ensuring type safety.

function getChai(kind: string | number) {
    if(typeof kind === "string") {
        return `preparing ${kind} chai`
    }

    return `Chai order: ${kind}`
}

function printId(id: number | string) {
    if(typeof id === "string") {
        console.log(`Id in string: ${id.toUpperCase()}`); // Narrowed in string
    } else {
        console.log(`Id is in number: ${id}`); // Narrowed in number
    }
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if(size == "small") {
        console.log("Small chai");
    } else if(size == "medium") {
        console.log("medium size chai");
    } else if(size == "large") {
        console.log("Large chaii");
    } else {
        console.log(`serving ${size} chai`);
    }
}

console.log(getChai("masala chai"));
console.log(getChai(5));

printId("Pavfhccgh1256");
printId(1522552);

orderChai("small")
orderChai("medium")
orderChai("large")
orderChai(5)



class kulhadChai {
    serve() {
        return `This is kulhad chaii`
    }
}

class cuttingChai {
    serve() {
        return `This is cutting chai`
    }
}

function serveChai(chai: kulhadChai | cuttingChai) {
    if(chai instanceof kulhadChai) {
        return chai.serve();
    }
}

console.log(serveChai(new kulhadChai));
console.log(serveChai(new cuttingChai));


type chaiType = {
    type : string,
    sugar: number
}

function checkValidChaiType(item: any): item is chaiType {
    return (
        typeof item === "object" && 
        item !== null &&
        typeof item.type === "string" && 
        typeof item.sugar === "number"
    )
}

function processChai(chai: chaiType | string) {
    if(checkValidChaiType(chai)) {
        return `Processing ${chai.type} with ${chai.sugar} suger`
    } else {
        return `Processing custom chai: ${chai}`
    }
}

console.log(processChai({type: "Masala Chai", sugar: 5}));
console.log(processChai("Plane chai with no suger"));

