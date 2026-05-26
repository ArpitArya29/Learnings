
// 1 Read file 
// 2 create a file named backup
// 3 store the content into the backup file
// 4 Delete the hello file

// let f = require('fs');

// Here the problem is that it creates a callback hell for the operation
// f.readFile("./hello.txt", "utf-8", (err, content) => {
//     if(err) {
//         console.log("Error reading file", err);
//     } else {
//         console.log("File read successfully");
//         f.writeFile("backup.txt", content, (err) => {
//             if(err) {
//                 console.log("Error writing file", err)
//             } else {
//                 f.unlink("./hello.txt", (err) => {
//                     if(err) {
//                         console.log("Error in deleting the file", err)
//                     } else {
//                         console.log("File deleted successfully");
//                     }
//                 })
//             }
//         })
//     }
// })


// for handling the callback hell, we have file system as a promise, a package developed by nodejs
// this is the file system module with promises
// let f2 = require('fs/promises');

// it looks cleaner, no any callback hells and enhanced readibility
// f2.readFile("./backup.txt", "utf-8")
//     .then( (data) => {
//         console.log("File read", data)
//         f2.writeFile("backupPromise.txt", data);
//     })
//     .then( (data) => {
//         f2.unlink("./backup.txt");
//     })
//     .catch( (err) => {
//         console.log("Error occured", err);
//     })

// console.log(data);


// converting the code into promisified version

let fs = require('fs');
// promisified version functions of the legecy code
function readFileWithPromise(filePath, encoding) {
    return new Promise ( (resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

function writeFileWithPromise(filePath, content) {
    return new Promise( (resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if(err) {
                reject(err);
            } else {
                resolve();
            }
        })
    })
}

function unlinkFileWithPromise(filePath) {
    return new Promise( (resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if(err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

let source = "backupPromise.txt";
let dest = "backup.txt";

// custom promise for the tasks
readFileWithPromise(`./${source}`, "utf-8")
    .then( (content) => writeFileWithPromise(dest, content))
    .then( () => unlinkFileWithPromise(`./${source}`))
    .catch( (err) => {console.log("Error occured", err)})
    .finally( ()=> {console.log("All task done")})


    
