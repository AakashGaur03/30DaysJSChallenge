// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function highorderFunction(callback, number) {
    for (let i = 0; i < number; i++) {
        callback()
    }
}

function callMEInsideHigh() {
    console.log("Hello, I'm being called!")
}

console.log(highorderFunction(callMEInsideHigh, 5))

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.


function highOrderFunction(square, addNumber, val) {
    let result = square(val)
    return addNumber(result)
}

const square = (value) => {
    return value * value
}

const addNumber = (value) => {
    return value + 100
}

console.log(highOrderFunction(square, Add100, 20))