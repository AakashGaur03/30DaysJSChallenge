// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const randomResolveReject = new Promise((resolve, reject) => {
    return Math.random() > 0.5 ? resolve("Resolved") : reject("Rejected")
})

randomResolveReject.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

const handleRandom = async () => {
    try {
        const response = await randomResolveReject
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

handleRandom()