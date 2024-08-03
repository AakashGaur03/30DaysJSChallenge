// Activity 2: Longest Substring Without Repeating Characters
// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.


// Longest Substring Without Repeating Characters
// Medium
// Topics
// Companies
// Hint
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
    s = s.split('');
    let l = 0;
    let longest = 0;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            l = Math.max(l, map.get(s[i]) + 1)
        }
        map.set(s[i], i);
        longest = Math.max(longest, i - l + 1)
    }
    return longest
};


// l = Math.max(l, map.get(s[i]) + 1)
// If the current character s[i] is in the map, this line updates l to be the maximum of its current value and map.get(s[i]) + 1. map.get(s[i]) gives the last seen index of the character s[i], so map.get(s[i]) + 1 moves l to the index right after the last seen index of the repeating character.

s = "abcabcbb"
// s = "bbbbb"
// s = "pwwkew"
console.log(lengthOfLongestSubstring(s))