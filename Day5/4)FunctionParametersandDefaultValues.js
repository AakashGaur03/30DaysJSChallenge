// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const product = (num1, num2 = 10) => {
    return num1 * num2;
}

console.log(product(20))
console.log(product(10))
console.log(product(34, 10))

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greet = (person, age=22) => {
    return `Hello, ${person}! You are ${age} years old.`
}

console.log(greet("John"))
console.log(greet("Michael"))
console.log(greet("Adam",40))