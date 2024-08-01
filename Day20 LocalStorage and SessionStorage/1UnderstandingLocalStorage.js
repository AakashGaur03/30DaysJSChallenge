// Activity 1: Understanding LocalStorage


// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.


let str = "This is a string Valve"

localStorage.setItem("MyString", str)

let retrievedStr = localStorage.getItem("MyString")

console.log("Retrieved String: ", retrievedStr)


// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let object = {
    name: "John Doe",
    age: 30,
    city: "New York",
}

let jsonConverted = JSON.stringify(object)
localStorage.setItem("userDetails", jsonConverted)
console.log(JSON.parse(localStorage.getItem("userDetails")))