class Animal{
    constructor(name,color){
        this.name = Animal.capitalize(name);
        this.color = color;
    }
    run(){
        console.log(`${this.name} is running`);
    }
    shout(){
        console.log(`${this.name} is shouting`);
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1);
    }
}

class Monkey extends Animal{
    shout(){
        super.shout();
        console.log(`${this.name} BANANAA`);
    }
}

let m = new Monkey('mankey','blonde');
m.shout();
console.log(m.name);