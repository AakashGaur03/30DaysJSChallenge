// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.

// Valid Parentheses
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


var isValid = function (s) {
    const stack = []
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false
            }
        }
    }
    return stack.length === 0;
};

s = "()"
// s = "()[]{}"
// s = "(]"

console.log(isValid(s))