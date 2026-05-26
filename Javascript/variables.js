// let x = 10;
// console.log(x);



// This is due to TDZ(Temporal Dead Zone) -> a zone where variables are inaccessible before its initialization
// console.log(z); // reference error
// let z = 5 (let also hoists, but it is not be accessible)



// this is due to "Hoisting", a function scoped variable i.e 'var' can be accessible before initializarion
// console.log(z); // undefined
// var z = 5
// console.log(z); // 5


// let message = "Hello World"
// console.log(message.toUpperCase());
// console.log(message.indexOf("World"));
// console.log(message.slice(0, 4)); // slice (a,b) : b is exclusive
// console.log(message);


// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr);
// let newArr = arr.splice(arr.indexOf(5), 1);
// console.log(newArr); // only 5
// console.log(arr); // except 5


// let [n1, n2] = arr; // Array destructuring, based on indexes
// console.log(n1, n2);



// function checkTruthyValue(value) {
//     if(value) {
//         console.log(value, "truthy");
//     } else {
//         console.log(value, "falasy");
//     }
// }

// checkTruthyValue(0);
// checkTruthyValue(1);
// checkTruthyValue("0");
// checkTruthyValue("1");
// checkTruthyValue("Arya");
// checkTruthyValue(undefined);
// checkTruthyValue(null);
// checkTruthyValue([null]);
// checkTruthyValue([undefined]);
// checkTruthyValue([]);
// checkTruthyValue([1,2,3,4]);


// Reduce
// let arr = [1,2,3,4,5,6,7,8,9]

// let total = arr.reduce( (acc, curr) => (acc+curr), 0);

// console.log(total);


// let sales = [
//     {product : "laptop", amt : 100000},
//     {product : "mobile", amt : 15000},
//     {product : "machine", amt : 1000},
//     {product : "charger", amt : 100},
//     {product : "cable", amt : 10},
// ]

// let totalSales = sales.reduce( (acc, curr) => (acc + curr.amt), 0);
// console.log("Total sales: ", totalSales);



// let activeUsers = [
//     {name: "Alice", activityCnt:50},
//     {name: "Bob", activityCnt:80},
//     {name: "Charles", activityCnt:60},
// ]

// let mostActiveUser = activeUsers.reduce( (maxUser, user) => (
//     maxUser.activityCnt > user.activityCnt ? maxUser : user
// ));
// console.log(mostActiveUser);


let experiences = [
    {"company" : "Webkul", "title":"trainee", "DOJ" : 2},
    {"company" : "Webkul", "title":"developer", "DOJ" : 1},
    {"company" : "Amazon", "title":"senior developer", "DOJ" : 4},
    {"company" : "Amazon", "title":"senior Software developer", "DOJ" : 5},
]


const formattedExperience = experiences.reduce( (acc, curr) => {

    if(!acc[curr.company]) {
        acc[curr.company] = []
    }
    acc[curr.company].push(curr);

    return acc;
}, {})

console.log(formattedExperience);

const sorted = Object.values(formattedExperience).map( (exp) => {
    return exp.sort( (a,b) => a.DOJ-b.DOJ)
} )

console.log(sorted);





// let items = [
//     {name: "A", stock: 20},
//     {name: "B", stock: 80},
//     {name: "C", stock: 50},
//     {name: "D", stock: 60},
//     {name: "E", stock: 10},
//     {name: "F", stock: 30},
// ]

// let lowStockItems = items.filter( (item) => (item.stock<50));

// console.log(lowStockItems);


// let movies = [
//     {title: "Movie A", ratings: [5,4,3]},
//     {title: "Movie B", ratings: [2,4,3]},
//     {title: "Movie C", ratings: [5,4,5]},
//     {title: "Movie D", ratings: [5,4,2]},
// ]

// let averageRatings = movies.map( (movie) => {
//     let avg = movie.ratings.reduce( (sum, rate) => sum + rate, 0) / movie.ratings.length;

//     return {title: movie.title, AvgRating: avg.toFixed(2)}
// })

// console.log(averageRatings);



// let tasks = [
//     {title:"Task A", completed: true, priority:2},
//     {title:"Task B", completed: false, priority:3},
//     {title:"Task C", completed: true, priority:1},
//     {title:"Task D", completed: false, priority:4},
//     {title:"Task E", completed: false, priority:5},
//     {title:"Task F", completed: false, priority:1},
//     {title:"Task G", completed: true, priority:2},
// ]

// // task is get the uncompleted tasks and sort them according to their priority

// let filteredSortedTask = tasks
//     .filter( (task) => !task.completed)
//     .sort( (a,b) => a.priority - b.priority)

// console.log(filteredSortedTask);



// let obj = {
//     a : {
//         b: {
//             c: 2
//         }
//     }
// }

// let path = "a.b.c";


// function check(path){
//     let arr = path.split(".");
//     console.log(arr);
    
//     return new Promise( (re, rj) => {
//         arr.forEach( (i) => {
//             if(obj[i] === undefined) {
//                 rj();
//             }
            
//             obj = obj[i];
//         })

//         re();
//     })
// }


// check(path)
//     .then( () => {
//         console.log("True");
//     })
//     .catch ( () => {
//         console.log("False");
//     })


// function exec(cb) {
//     setTimeout(() => {
//         cb();
//     }, 2 * 1000);
// }
// let a = {val : 5};
// exec(()=> console.log("Hello", a));