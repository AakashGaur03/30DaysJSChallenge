// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
const checkEvenOdd = (number) => {
    let res = number < 0 ? "odd" : "even"
    console.log(res)
}

checkEvenOdd(10)
checkEvenOdd(0)
checkEvenOdd(-10)