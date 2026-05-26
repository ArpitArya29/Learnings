// PROXY
// let arr = [1,2,3,4,5,6,7,8,9,10];

// let pArr = new Proxy(arr, {
//     get(target, prop) {
//         prop = Number(prop) % 10 // for higher index than length
//         if(prop<0) {
//             let negIdx = target.length + prop; // prop by default string
//             return target[negIdx]
//         }

//         return target[prop]
//     }
// })

// // console.log(arr[-1]);

// console.log(pArr[15]);

// let user = {
//     name : "Arpit",
//     age : 20,
//     password : "12345"
// }

// let pUser = new Proxy( user, {
//     get(target, prop) {
//         console.log(prop);
        
//         if(prop === 'password') {
//             // console.log("Accessing password");
            
//             return "Password can't be accessed"
//         }

//         return target[prop]
//     },

//     set(target, prop, value) {
//         console.log(target, prop, value);
        
//         if(prop == 'password') {
//             throw new Error("password can't be modified")
//         }

//         target[prop] = value;
//         return "Value Updated"
//     }
// })

// // console.log(pUser['password']);
// pUser["name"] = "Arya" // if we change into the proxy array, the change will also reflect into the original array
// console.log(pUser);
// console.log(user);



// PROMISES
// function getVal(message) {
//     return new Promise ( (resolve, reject) => {
//         setTimeout( () => {
//             if(message === "please")
//                 resolve(2)
//             else 
//                 reject("Nahi milega")
//         }, 1 * 1000);
//     })
// }

// let a = 10;
// let b = 20;

// let response = getVal("please");

// response
//     .then( (c)=> {
//         let res = a + b + c;
        
//         console.log(res);
//     })
//     .catch( (err)=> {
//         console.log("Can't get the result:", err);
//     })
//     .finally ( ()=> {
//         console.log("Chal gaya code promise wala");
//     })



// CALLBACKS

// callbacks are the functions that are passes to another function that can be called whenever is required by its higher function
// it is generally used for asynchronous nature of js code
// like in this example, sum is a time taking function, we passed our callback that is executed after its intensive task, it would not block the code flow of the program

console.log("start");

// here, r is a callback function
let res = sum(5, 10, (r) => { 
    console.log(`Result is: ${r}`); 
});


function sum(a, b, cb) {
    setTimeout( ()=> {
        cb(a+b);
    }, 1*1000 );
}

console.log("end");