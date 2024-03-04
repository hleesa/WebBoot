const cat = {
    name: 'lion',
    color: 'gold',
    meow() {
        console.log("THIS IS: ", this);
        console.log(`${this.name} says meowww`);
    },
}

const meow2 = cat.meow;