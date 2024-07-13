// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var number = 5
console.log("Number : ", number, "\n")
// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let name = "Aakash"
console.log("name : ", name,"\n")

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
// Activity 3: Data Types

const isMale = true
console.log("is Male :", isMale,"\n")


// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let num = 1
let string = "UserName"
let isTrue = true
let objvalue = {
    firstName: "John",
    lastName: "Doe",
    age: 28
}
let fruitsArr = ["apple", "banana", "orange"]
let map = new Map()
let set = new Set()

console.log("num : ", num, ", Its Type : ", typeof (num),"\n")            // number
console.log("string : ", string, ", Its Type : ", typeof (string),"\n")         // string
console.log("isTrue : ", isTrue, ", Its Type : ", typeof (isTrue),"\n")         // boolean
console.log("objvalue : ", objvalue, ", Its Type : ", typeof (objvalue),"\n")       // object
console.log("fruitsArr : ", fruitsArr, ", Its Type : ", typeof (fruitsArr),"\n")      // object
console.log("map : ", map, ", Its Type : ", typeof (map),"\n")            // object
console.log("set : ", set, ", Its Type : ", typeof (set),"\n")            // object

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let greet = "Hello Everyone"
console.log("OldValue : ", greet,"\n")
greet = "Good morning everyone"
console.log("Reassigned Value :", greet,"\n")


// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.

const val = 20
console.log("Constant Value :", val,"\n")
// val = 50                // Error Assignment to constant variable.