// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

const NegOrPas = (number) => {
    let result = number > 0 ? "Number is Positive" : "Number is Negative"
    console.log(result)
}

NegOrPas(22)
NegOrPas(12)
NegOrPas(-1)
NegOrPas(-100)