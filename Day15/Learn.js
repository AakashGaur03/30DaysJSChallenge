
// Memoization

let cache2 = {}

function addBasic(num) {
    if (cache2[num]) {
        return cache2[num]
    } else {
        cache2[num] = num + 10
        return cache2[num]
    }
}

console.log(cache2)
console.log(addBasic(20))
console.log(cache2)
console.log(addBasic(20))
console.log(addBasic(20))
console.log(addBasic(20))


function fibonacci(num, cache = {}) {
    if (cache[num]) return cache[num]
    if (num <= 1) return num;
    cache[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return cache[num]
}

console.log(fibonacci(0))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))



function factorial(num, cache = {}) {
    if (cache[num]) return cache[num]
    if (num <= 1) return 1;
    cache[num] = num * factorial(num - 1);
    return cache[num]
}

console.log(factorial(5))

// This is basic approach

// We generarlly use memoization function

function memoize(fn) {
    const cache = new Map(); // Using Map to handle cache

    return function(...args) {
        const key = JSON.stringify(args); // Create a cache key from function arguments

        if (cache.has(key)) {
            return cache.get(key); // Return cached result if it exists
        }

        const result = fn(...args); // Compute the result
        cache.set(key, result); // Store result in cache
        return result; // Return the result
    };
}
