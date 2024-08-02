// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.
// Reverse Integer
// Solved
// Medium
// Topics
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// With InBuilt reverse
// const reverse = function (x) {
//     let isNumberNagative = false
//     if (x < 0) {
//         isNumberNagative = true
//         x = -x;
//     }
//     let res = Number(x.toString().split('').reverse().join(''))
//     if (res > 2 ** 31 - 1 || res < -(2 ** 31)) {
//         return 0;
//     }
//     if (isNumberNagative) return -res
//     return res
// };


// // Without InBuilt reverse
const reverse = function (x) {
    let reversed = 0;
    let isNumberNagative = x < 0
    x = Math.abs(x)

    while (x > 0) {
        let digit = x % 10
        reversed = reversed * 10 + digit
        x = Math.floor(x / 10)
    }
    if (reversed > 2 ** 31 - 1 || reversed < -(2 ** 31)) {
        return 0;
    }

    return isNumberNagative ? -reversed : reversed;
};

// x = 123
x = -123
// x = 120
console.log(reverse(x))