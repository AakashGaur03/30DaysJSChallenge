// Activity 5: Group Anagrams
// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.


// Group Anagrams
// Solved
// Medium
// Topics
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


var groupAnagrams = function (strs) {
    let anagramsMap = new Map();
    for (let word of strs) {
        const sortedWord = word.split("").sort().join("");
        if (anagramsMap.has(sortedWord)) {
            anagramsMap.get(sortedWord).push(word);
        } else {
            anagramsMap.set(sortedWord, [word]);
        }
    }

    return Array.from(anagramsMap.values());
};


strs = ["eat","tea","tan","ate","nat","bat"]
// strs = [""]
// strs = ["a"]
console.log(groupAnagrams(strs))