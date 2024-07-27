// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateUniqueId() {
    // let uniqueId = Math.floor(Math.random() * 20)
    let uniqueId = 0
    function returnLastId() {
        uniqueId++;
        return uniqueId;
    }

    return returnLastId
}

const uniqe = generateUniqueId()

console.log(uniqe())
console.log(uniqe())
console.log(uniqe())
// Do this if return {uniqueId}
// console.log(uniqe.returnLastId())
// console.log(uniqe.returnLastId())
// console.log(uniqe.returnLastId())

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function creategreet (name){
    return function(){
        return `Hello my Name is : ${name}`
    }
}

let greet1 = creategreet("John")
let greet2 = creategreet("Smith")

console.log(greet1())
console.log(greet2())