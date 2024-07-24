// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

const callThisFucn = () =>{
// console.log("call This function")
throw new Error('Error')
}

try {
    callThisFucn()
    console.log("Inside Try Block")
} catch (error) {
    console.log("Inside Error Block : ",error)
}finally{
console.log("Finally Block is always called ")
}