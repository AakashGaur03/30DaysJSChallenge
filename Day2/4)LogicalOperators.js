
// Activity 4: Logical Operators

let number1 = 10
let number2 = 100
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
if (number2 > number1 && number1 > 0) {
    console.log("number1 is greater than 0 and number2 is greater than number1")
} else {
    console.log("number1 is smaller than 0 or number2 is smaller than number1")
}

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if (number2 > number1 || number1 > 0) {
    console.log("Either number1 is greater than 0 Or number2 is greater than number1")
} else {
    console.log("Neither number1 is greater than 0 nor number2 is greater than number1")
}

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let age = 25

let canDrive = age >= 18

if (!canDrive) {
    console.log("You can't Drive")
} else {
    console.log("You can Drive")
}