// Activity 3: Spread and Rest Operators


// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8]

console.log(newNumbers)

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
    // let sum = 0
    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i]
    // }
    // return sum
    return numbers.reduce((acc, curr) => acc + curr, 0)
}

console.log(sum(1, 2, 3, 4, 5))