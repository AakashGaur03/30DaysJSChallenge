// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.


const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched successfully')
    }, 2000)
})

const asyncPromise = async () => {
    const response = await fetchData
    console.log(response)
}

asyncPromise()

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

const fetchfalseData = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("There is an Error")
    }, 2000);
})

const asyncErrorPromise = async () => {
    try {
        const response = await fetchfalseData
        console.log(response)
    } catch (err) {
        console.error(err)
    }
}
asyncErrorPromise()