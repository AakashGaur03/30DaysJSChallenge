// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 1 Resolved")
    }, 1000);
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 2 Resolved")
    },500)
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise 3 Resolved")
    }, 100);
})

Promise.all([promise1, promise2, promise3]).then((values)=>{
    console.log(values)
}).catch((err)=>{
    console.log(err)
})


// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.


Promise.race([promise1, promise2, promise3]).then((value)=>{
    console.log(value)
}).catch((err)=>console.log(err))