// Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello, this is a generic greeting from the Person class.";
    }
}

console.log(Person.genericGreeting());


// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student extends Person {
    static studentCount = 0;
    constructor(name, age, studentId) {
        super(name, age)
        Student.studentCount++
        this.studentId = studentId;
    }
    getStudentId() {
        return `This is ID : ${this.studentId}`;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and My Student Id is ${this.studentId}`;
    }

    getStudentCount() {
        return `Total Students created : ${Student.studentCount}`;
    }
}

const student1 = new Student("John Doe", 20);
console.log(Student.studentCount)
const student2 = new Student("John Doe", 20);
console.log(Student.studentCount)
const student3 = new Student("John Doe", 20);
console.log(Student.studentCount)