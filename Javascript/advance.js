// function debounce(fn, time) {
//     let t = null;
    
//     return function(...args) {
//         clearTimeout(t); // clearing the previous delay and assigning new time on every call, ensuring executing the last called method
//         t = setTimeout( ()=> {
//             fn.apply(this, args);
//         }, time * 1000)
//     }
// }

// function greet(name, id) {
//     console.log(`Hello ${name}: ${id}`);
// }

// let dbVersion = debounce(greet, 4); // passing the reference of the function

// dbVersion("Arpit", 100); // calling the returned function with ...args, all the arguments are applied to the referenced function

// setTimeout( ()=> dbVersion("Arpit", 200), 2 * 1000);
// setTimeout( ()=> dbVersion("Arpit", 300), 2* 1000);
// setTimeout( ()=> dbVersion("Arpit", 400), 2* 1000);
// setTimeout( ()=> dbVersion("Arpit", 600), 2* 1000);
// setTimeout( ()=> dbVersion("Arpit", 500), 2* 1000);
// setTimeout( ()=> dbVersion("Arpit", 700), 2* 1000);
// setTimeout( ()=> dbVersion("Arpit", 800), 2* 1000);
// setTimeout( ()=> dbVersion("Arpit", 900), 2* 1000);
// setTimeout( ()=> dbVersion("Arpit", 1000), 8* 1000);


function throat(fn, time) {
    let exec = null;

    return function throatSupport(...args) {
        if(exec==null) {
            fn.apply(this, args);
            exec = setTimeout( () => {
                exec = null;
            }, time * 1000);
        }
    }
}

function greet(name, id) {
    console.log(`Hello ${name}: ${id}`);
}
 
let th = throat(greet, 4);
th("Arpit", 1);
// th("Arpit", 2);
// th("Arpit", 3);
// th("Arpit", 4);
// th("Arpit", 5);

setTimeout ( ()=> th("Arpit", 2), 2000)
setTimeout ( ()=> th("Arpit", 3), 2000)
setTimeout ( ()=> th("Arpit", 4), 5000)
setTimeout ( ()=> th("Arpit", 5), 6000)
setTimeout ( ()=> th("Arpit", 6), 10000)
setTimeout ( ()=> th("Arpit", 7), 15000)
