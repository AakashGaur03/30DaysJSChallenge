// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(4, 5));

// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5))
console.log(memoizedFactorial(5))
console.log(memoizedFactorial(6))
console.log(memoizedFactorial(7))