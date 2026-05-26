// let globalVariable = "I am global";
// let x = 10;

// function modifyGlobal() {
//     globalVariable = "I am modified";
//     let localVariable = "I am local";

//     let x = 20;

//     console.log(localVariable);
//     console.log(x); // x will be 20
// }

// modifyGlobal();
// console.log(globalVariable, x); // globalVariable is modified bczz it modifies the prev parent lexical scoped variable
// // x will be 10, because x is redclared into the scope of the modify method, so it changes its local variable not the global variable



let p1 = {
    name: "P1_Name",
    greet: function(){
        console.log(`hello ${this.name}`);
    }
}

p1.greet()

let p2 = {
    name: "P2_Name"
}

p1.greet()
// we have to greet p2 using the greet function of p1

p1.greet.call(p2); // calls immediately calls with the context of the object

p1.greet.bind(p2)(); // binds returns an executable function for the object

let gr = p1.greet.bind(p2); // gr is a returned function for p2 with bind
gr();


setTimeout( p1.greet , 2 * 1000 ); // this returns undefined bczz it doesn't have the context in the callStsck after setTimeout
setTimeout( () => p1.greet.call(p1), 4 * 1000 ); // for having its contect, we should have to attach the referenced object
setTimeout( p1.greet.bind(p2), 6 * 1000 ); // binds done the same, but it returns the function that is being invoked after 6S

console.log("Done the code");
