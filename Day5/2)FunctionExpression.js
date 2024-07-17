// Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.


const maximum = function (a, b) {
    if (a > b) {
        console.log(a, "is Maximum");
    } else {
        console.log(b, "is Maximum");
    }
}

console.log(maximum(3, 5))
console.log(maximum(5, 10))


// Task 4: Write a function expression to concatenate two strings and return the result.

const concatStrings = function (str1, str2) {
    return str1 + str2
}

console.log(concatStrings("Hello", " World"))
console.log(concatStrings("Hello", " John"))