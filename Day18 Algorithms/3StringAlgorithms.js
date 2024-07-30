// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

const countCharacterOccurrences = (str) => {
    const charCount = {}

    for (const iterator of str) {
        charCount[iterator] = charCount[iterator] + 1 || 1
    }

    return charCount

}

let inputString = "hello world";
let charCounts = countCharacterOccurrences(inputString);

console.log("Character Counts:", charCounts);

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.


const lengthOfLongestSubstring = (s) => {
    let maxLength = 0;
    let start = 0;
    const charMap = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        if (char in charMap) {
            start = Math.max(start, charMap[char] + 1)
        }
        charMap[char] = i

        maxLength = Math.max(maxLength, i - start + 1)
    }
    return maxLength;
}

let inputString2 = "abcabcbb";
let maxLength = lengthOfLongestSubstring(inputString2);

console.log("Length of the longest substring without repeating characters:", maxLength);