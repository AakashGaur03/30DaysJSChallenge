// Activity 3: Custom Error Objects


// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'CustomError';
//   }
// }

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("Custom error occurred");
}

try {
    throwCustomError()
} catch (error) {
    console.log(error)
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.


function validateInput(input) {
    if (!input || input.trim() === "") {
        throw new CustomError("Input cannot be empty");
    }
    console.log("Input is valid");
}

try {
    validateInput("A"); // This will fail validation
} catch (error) {
   console.log(error)
}