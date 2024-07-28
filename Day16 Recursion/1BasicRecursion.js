// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

const factorial = (n) => {
    if (n < 0) return -1;
    if (n == 0 || n == 1) return 1;
    return n * factorial(n - 1)
}

console.log(factorial(-2))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n == 1) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(10))