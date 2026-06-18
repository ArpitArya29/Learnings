// import axios, {type AxiosResponse} from "axios"

// interface Todo {
//     userid: number;
//     id: number;
//     title: string;
//     completed: boolean
// }

// USING AXIOS
// const fetchData = async() => {
//     try {
//         const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

//         // the response have suggestion for its all the fields, as it is of the type of AxiosResponse
//         // console.log("Todo", response.data);
//         return response.data
//     } catch (error: any) {
//         // validating it is the response error
//         if(axios.isAxiosError(error)) {
//             console.log(error.message);
//         }
//     }
// }

// // const data = await fetchData()

// // console.log(data);

// fetchData()
// .then((value: Todo | undefined) => {
//     console.log("Todo value", value);
// })


// const fetchDataWithPromise = new Promise(async(res, rej) => {
//     try {
//         const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

//         res(response.data)

//     } catch (error: any) {
//         if(axios.isAxiosError(error)) {
//             if(error.status == 404) {
//                 rej("Does not found");
//             }
//             rej(error.message);
//         }
//     }
// })

// fetchData()
// .then( (value: Todo | undefined) => {
//     console.log(value);
// })
// .catch((reason: any) => {
//     console.log("Error", reason);
// })


// USING FETCH
interface Todo {
    userid: number;
    id: number;
    title: string;
    completed: boolean
}

const fetchData = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        if(!response.ok) {
            throw new Error(`HTTP error ${response.status}`)
        }

        const data: Todo = await response.json();
        return data;
    } catch (error) {
        
    }
}

const d = await fetchData();
console.log(d);
