// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const resolveAfter2Sec = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved after 2 seconds")
    }, 2000);
})

resolveAfter2Sec.then((message) => console.log(message))



// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const rejectAfter2Sec = new Promise((reolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected")
    }, 2000)
})

rejectAfter2Sec.then((msg) => console.log(msg)).catch((error) => console.error(error))