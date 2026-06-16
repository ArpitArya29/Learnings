// it simply used for the generalization of the types

function wrapInArray<T>(item: T): T[] {
    return [item]
}

console.log(wrapInArray("masala"));
console.log(wrapInArray(42));
console.log(wrapInArray(52));
console.log(wrapInArray({flavour: "Ginger"}));


function pair<A, B>(a: A, b:B): [A, B] {
    return [a, b];
}


class Repository<T> {
    private itmes: T[] = [];

    add(item: T) {
        this.itmes.push(item);
    }

    getAll(): T[] {
        return this.itmes;
    }

    getFirst(): T | undefined {
        return this.itmes[0]
    }
}

interface User {
    readonly id: number;
    name: string
}

const users = new Repository<User>();

users.add({id: 1, name: "user1"});
users.add({id: 2, name: "User2"});

console.log(users.getAll());
console.log(users.getFirst());



interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "Some string"}


interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{flavour: string}> = {
    status: 200,
    data: {
        flavour: "Masala"
    }
}