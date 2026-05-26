// FOREACH OF LOOP

// let arr = [1, 2, 3, 4, 5];

// if(!Array.prototype.myForEach) {
//     Array.prototype.myForEach = function (cb) {
//         for(let i=0; i<this.length; i++) {
//             cb(this[i], i);
//         }
//     }
// }

// if(!Array.prototype.myEvenForEach) {
//     Array.prototype.myEvenForEach = function (cb) {
//         for(let i=0; i<this.length; i++) {
//             if(i%2==0){
//                 cb(this[i], i);
//             }
//         }
//     }
// }

// arr.forEach( (val, idx) => {
//     console.log(`With original function Value at ${idx} is ${val}`);
// })


// arr.myForEach( (val, idx) => {
//     console.log(`With polyfill function Value at ${idx} is ${val}`);
// })


// arr.myEvenForEach( (val, idx) => {
//     console.log(`With even polyfill function Value at ${idx} is ${val}`);
// })



// MAP
// let arr = [1, 2, 3, 4, 5];

// if(!Array.prototype.myMap) {
//     Array.prototype.myMap = function (cb) {
//         let nArr = []
//         for(let i=0; i<this.length; i++) {
//             nArr.push(cb([this[i]]));
//         }

//         return nArr;
//     }
// }

// let nArr = arr.map( (val) => val*2);

// console.log(arr);
// // console.log(nArr);

// let arr2 = arr.myMap( (val) => Number(val)+2);
// console.log(arr2);


// FILTER
// let arr = [1, 2, 3, 4, 5];

// if(!Array.prototype.myFilter) {
//     Array.prototype.myFilter = function (cb) {
//         let a = [];

//         this.forEach( (val) => {
//             if(cb(val)) a.push(val);
//         })

//         return a;
//     }
// }

// let nArr = arr.filter( (val) => val%2==0 )

// let arr2 = arr.myFilter( (v) => v%2==0)
// console.log(arr2);


// REDUCE
let arr = [1, 2, 3, 4, 5];

if(!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(cb, initial) {

        let st = initial ? 0 : 1;
        let acc = initial || this[0];

        for(let i=st; i<this.length; i++) {
            acc = cb(acc, this[i]);
        }

        return acc;
    }
}

let val = arr.reduce( (acc, curr) => acc + curr, 0);
console.log(val);

let tVal = arr.myReduce( (acc, curr) => acc + curr, 2);
console.log(tVal);

let mVal = arr.myReduce( (max, curr) => curr > max ? curr : max);
console.log(mVal);

