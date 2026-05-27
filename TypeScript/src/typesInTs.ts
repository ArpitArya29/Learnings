// Type Annotation and Inference

// Type Inferencig - a concept where the types is automatically determined during its initialization
let drink = "water"; // type inference
// drink = 0 // it returns an error because it infered it as a string

let cups = Math.random() > 0.5 ? 10 : 5 // interferred as number


// Type Annotation - concept of assigning the type during the initialization
let name : string = "hello string"
// name = 12 // throws an error, bczz it is defined as string