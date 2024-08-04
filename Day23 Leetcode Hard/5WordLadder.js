// Activity 5: Word Ladder
// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.

// Word Ladder
// Hard
// Topics
// Companies
// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.



// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let wordSet = new Set(wordList)
    let wordLength = beginWord.length
    let possibleCharacterForEachPosition = Array.from({ length: wordLength }, () => [])
    for (let i = 0; i < wordLength; i++) {
        for (let allowedWord of wordList) {
            if (!possibleCharacterForEachPosition[i].includes(allowedWord[i])) {
                possibleCharacterForEachPosition[i].push(allowedWord[i])
            }
        }
    }

    let que = [[beginWord, 1]]

    while (que.length) {
        let front = que.shift()
        let word = front[0]
        let level = front[1]
        let i = 0

        for (let x of possibleCharacterForEachPosition) {
            for (let posChar of x) {
                let newchar = word.slice(0, i) + posChar + word.slice(i + 1)
                if (wordSet.has(newchar)) {
                    if (newchar === endWord) return level + 1
                    que.push([newchar, level + 1])
                    wordSet.delete(newchar)
                }
            }
            i++
        }
    }
    return 0
};

// beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]

console.log(ladderLength(beginWord, endWord, wordList))
