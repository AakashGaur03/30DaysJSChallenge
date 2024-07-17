// Activity 3: Arrow Functions



// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(2, 3))
console.log(sum(4, 8))

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsChar = (string, char) => {
    if(string.includes(char)) return true
    else return false
}

console.log(containsChar("Hello World", "z"))
console.log(containsChar("Hello World", "l"))
console.log(containsChar("Hello World", "w"))
console.log(containsChar("Hello World", "W"))