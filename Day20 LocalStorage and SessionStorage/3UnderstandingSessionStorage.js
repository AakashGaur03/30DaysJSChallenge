// Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

let strSession = "This is a string value to be saved to sessionStorage"

sessionStorage.setItem("sessionString",strSession)

let retrievedStrSession = sessionStorage.getItem("sessionString")

console.log(retrievedStrSession)

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let objectSession = {
    name: "John",
    age: 30,
    city: "New York"
}

sessionStorage.setItem("sessionObj",JSON.stringify(objectSession))

console.log(JSON.parse(sessionStorage.getItem("sessionObj")))