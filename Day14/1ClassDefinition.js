// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person("John Doe", 30);
console.log(person1.greet())





// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class newPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    updateAge(newAge) {
        this.age = newAge
    }
}

const person2 = new newPerson("Jane Doe", 25);

console.log(person2)

person2.updateAge(35)

console.log(person2)