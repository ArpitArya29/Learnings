// class Chai {
//     flavour: string;
//     price: number

//     // it needs a constructor for using the instance variables of the class
//     constructor(flavour: string = "default", price: number = 10) {
//         this.flavour = flavour;
//         this.price = price
//     }
// }

// const masalaChai = new Chai("masala", 20)
// const defaultChai = new Chai();


class Chai {
    public flavour: string = "masala"

    private secretngr = "secret ingredient"

    reveal() {
        return this.secretngr
    }
}

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName() {
        return this.shopName // can be accessed by single level inheritance as the shopname is protected
    }
}


class Wallet {
    #balance = 100 // private data variable

    getBalance() {
        return this.#balance
    }

    incrBalance(amount: number) {
        this.#balance += amount
    }

    decrBalance(amount: number) {
        this.#balance -= amount
    }
}

const w = new Wallet();
console.log(w.getBalance());
w.incrBalance(100);
w.decrBalance(10);
console.log(w.getBalance())


class Cup {
    // readonly can be assigned only once, and then it can't be changes
    readonly capacity: number = 250; // default value

    constructor(capacity: number) {
        this.capacity = capacity
    }
}

const cupSize = new Cup(150);
console.log(cupSize.capacity);


// getters and setters

class ModernChai {
    private _sugar: number = 2;

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if(value > 5) throw new Error("Too sweet");

        this._sugar = value
    }
}

const c = new ModernChai();
c.sugar = 4;

console.log(c.sugar);


// STATIC MEMBERS
class EkChai {
    static shopName = "Chaicode Cafe"

    constructor(public flavour: string) {}
}

console.log(EkChai.shopName);


abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink {
    make(): void {
        console.log("making chai");
    }
}


// COMPOSITION
class Heater {
    heat(substance: string) {
        console.log(`Heating ${substance}...`);
    }
}

class ChaiMaker {
    // the parameter which is taken from another class
    constructor(private heater: Heater){}

    make() {
        this.heater.heat("Milk");
        this.heater.heat("Water");
        console.log("Making chai");
    }
}

const chaiMachine = new ChaiMaker(new Heater);
chaiMachine.make()


