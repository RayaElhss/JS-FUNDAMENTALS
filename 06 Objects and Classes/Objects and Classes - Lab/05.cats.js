function myCat(input) {

    class Cat {
        constructor(name, age) {
            this.name = name,
                this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let catInfo of input) {
        let [name, age] = catInfo.split(" ");
        let newCat = new Cat(name, age);
        newCat.meow();
    }

}

myCat(['Mellow 2', 'Tom 5'])