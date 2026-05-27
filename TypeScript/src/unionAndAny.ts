let subscribers: number | string = 100; // UNION, either number or string

let apiReqStatus : 'pending' | 'success' | 'error' = 'pending'

// apiReqStatus = "done" // throws an error, as it can be either pending, success or error

let airlineSeat : 'aisle' | 'window' | 'middle' = 'aisle';
airlineSeat = "window" // it can only be assigned with any one of the defined values

const orders = ['12', '23', '28', '42']
// let currentOrder; // datatype is "any", it will be the problem as it can also be assigned as 
// currentOrder = 43 // number, it's a problem

// the solution is
let currentorder : string | undefined; // avoiding any and using UNION

// currentorder = 42 // now, it can't be assigned with any other data types

for(let order of orders) {
    if(order === '28') {
        currentorder = order;
        break;
    }
}

console.log(currentorder); // a special error, "Variable 'currentorder' is used before being assigned." bczz it does not guarrenties that the variable is being assigned, it can be handles by using UNION
// declaring string | undefined
