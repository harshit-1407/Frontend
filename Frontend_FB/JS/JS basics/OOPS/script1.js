// const Person=function(name, age) {
//     this.name=name;
//     this.age=age;
//     Person.prototype.introduce=function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//     const Person1=new Person("Alice", 30);
//     Person1.introduce();
//     console.log(Person1);

// }


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const Person1 = new Person("Alice", 30);
Person1.introduce();
console.log(Person1);











