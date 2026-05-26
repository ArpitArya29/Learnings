// let na = "arya";
// let obj = {
//     n : "Arpit"
// }

// function f1() {
//     let variab = "xxxxxx";
//     console.log(`f1: ${obj.n}`);

//     function f2() {
//         console.log(`f2: ${na}`);
//     }
//     f2();

//     function pr () {
//         console.log(variab);
//     }

//     setTimeout( pr, 5 * 1000);

// }


// setTimeout( f1, 5*1000); // with the settimeout, na in f1 is read as Arya, because na value is changed
// f1();

// na = "Arya"


// function f1() {
    // console.log(`f1: ${na}`);
    // function f2() {
//         console.log(`f2: ${na}`);
//     }
//     f2();
// }


// console.log("Into the global scope", na);


// let p1 = {
//     name: "P1_Name",
//     greet: function(){
//         console.log(`hello ${this.name}`);
//     }
// }

// p1.greet();   -- name

// setTimeout ( ()=> p1.greet(), 1*1000);   -- name
// setTimeout ( p1.greet.bind(p1), 1*1000);   -- name
// setTimeout ( p1.greet, 1*1000);   -- undefined


// CREATING COUNTER

// function createCounter() {
//     let count = 0;

//     return function(op) {

//         switch(op.toLowerCase()) {
//             case "incr" : 
//                 count++;
//                 break;
//             case "decr" :
//                 count--;
//                 break;
//             case "reset" :
//                 count = 0;
//                 break;
//         }

//         return count;
//     }
// }

// let c1 = createCounter();
// let c2 = createCounter();

// console.log("c1", c1("incr"));
// console.log("c1", c1("incr"));
// console.log("c1", c1("reset"));
// console.log("c1", c1("incr"));
// console.log("c1", c1("incr"));
 
// console.log("c2", c2("incr"));
// console.log("c2", c2("incr"));
// console.log("c2", c2("decr"));
// console.log("c2", c2("incr"));
 
// console.log("c1", c1("incr"));
// console.log(c1());
// console.log(c1());

// console.log(c2());
// console.log(c2());
// console.log(c2());
// console.log(c2());

// console.log(c1());
// console.log(c1());


console.log([]==false)
// console.log([]==="");

