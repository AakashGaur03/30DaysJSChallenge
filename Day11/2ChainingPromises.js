// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const apiResponse = {
    name: "John",
    age: "21",
    data: {
        fatherName: "Smith",
        motherName: "Laura",
    }
}

const fetchDetials = new Promise((resolve, reject) => {
    resolve(apiResponse)
})

fetchDetials.then((response) => {
    return new Promise((resolve, reject) => {
        resolve(response.data)
    })
}).then((responseData) => {
    return new Promise((resolve, reject) => {
        console.log(`Mother Name : ${responseData.motherName} `)
        resolve(responseData.fatherName)
    })
}).then((againResponse) => {
    return new Promise((resolve, reject) => {
        console.log(`Fater Name : : ${againResponse}`)
        resolve("Chain Completed")
    })
}).catch((err) => {
    console.log("An Error Occured While resolving Chain : ", err)
})