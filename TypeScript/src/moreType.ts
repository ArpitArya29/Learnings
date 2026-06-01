let response: any = "423";
let numericLength: number = (response as string).length

console.log(numericLength) // 

type Book = {
    name: string,
    pages: number
}

let bookData = '{"name": "The Alchemist", "pages":7}';

let bookObject = JSON.parse(bookData) as Book;

console.log(`The book we found is ${bookObject.name} with ${bookObject.pages} pages`); 

// we can explicitley define the types of the data
// TYPES ASSERTION
// const inputElements = document.getElementById("name") as HTMLInputElement



// Problem with try-catch block
try {
    throw new Error("This is a sample error to check this block");
} catch (error) {
    // explicitely check whether it is of the Error Class or not
    if(error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}

// const data: string = "Any data"
// const stData: string = data // this works fine


const data: unknown = "Any data"
const stData: string = data as string // proper mentions that it is of the specific datatype (string)



type Role = "admin" | "user" | "superAdmin";

function redirectBasedOnRole(role: Role) : void {
    if(role === "admin") {
        console.log("Redirecting to admin page");
        return;
    }

    if(role === "user") {
        console.log("Redirecting to User dashboard");
        return;
    }

    // diring hovering, it shows the remaining role to be handled
    // if not any remaining role will be there, then it will be of type never
    role;
}