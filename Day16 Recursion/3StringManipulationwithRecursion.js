// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

const reverseString = (str) => {
    if (str.length <= 1) return str
    return str[str.length - 1] + reverseString(str.slice(0, -1))
}



console.log(reverseString("Hello"))
console.log(reverseString("How Are you"))
console.log(reverseString("reversethisstring"))

// str[str.length -1] (Gives Last element at start)  + reverseString(str.slice(0,-1)) (It removes Last element from string)


// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

const checkPalindrome = (str) => {
    if (str.length <= 1) return true

    if (str[0] !== str[str.length - 1]) return false
    return checkPalindrome(str.slice(1, -1))
}
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("hello"));
console.log(checkPalindrome("a"));
console.log(checkPalindrome(""));
console.log(checkPalindrome("level"));
console.log(checkPalindrome("levell"));

// Ex: racecar
// beginIndex = 1: Start extraction from index 1, which is the character 'a'.
// endIndex = -1: End extraction just before the second-to-last character. The second-to-last character is 'r', so we end before that, which means we stop at the character 'a'.

// For "racecar", this will be "aceca". and so on.