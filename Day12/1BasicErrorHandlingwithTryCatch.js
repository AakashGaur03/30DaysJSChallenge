// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
// console.log(object)
throw new Error("Intentional Error")
}

try {
    throwError()
} catch (error) {
    console.log("Error coming from catch: ",error)
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error

function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        // console.error("Denominatoe is zero")
        throw new Error("Denominator cannot be zero")
    }
    return numerator / denominator
}

try {
    divideNumbers(3,0)
} catch (error) {
    console.log(error)
}