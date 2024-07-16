// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let number = 1
do {
    console.log(number)
    number++
} while (number <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

const factorial = (number) => {
    let result = 1
    do {
        result *= number
        number--
    } while (number > 1)

    console.log(result)
}
factorial(5)
factorial(6)
factorial(7)