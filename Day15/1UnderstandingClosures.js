// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.


function one() {
    let variable = 1
    function two() {
        console.log(variable)
        return variable * 2
    }
    return two
}

let res = one()
let result = res()
console.log(result)

// Directly calling the inner function
let directResult = one()()
console.log(directResult)

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.


function createCounter() {
    let counter = 0

    function increment() {
        counter++
    }

    function getCounterValue() {
        return counter
    }

    return { increment, getCounterValue }
}

let counter = createCounter()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getCounterValue())
counter.increment()

console.log(counter.getCounterValue())