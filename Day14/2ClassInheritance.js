// Activity 2: Class Inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId;
    }
    getStudentId() {
        return `This is ID : ${this.studentId}`;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and My Student Id is ${this.studentId}`;
    }
}

const student = new Student("John Doe", 20, "12345");

console.log(student)
console.log(student.getStudentId())

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.


console.log(student.greet())
