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

console.log(getChai("masala chai"));
console.log(getChai(5));

printId("Pavfhccgh1256");
printId(1522552);
