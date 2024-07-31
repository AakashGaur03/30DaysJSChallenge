// Activity 1: Basic Regular Expressions
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const string1 = "JavaScript is a popular programming language. JavaScript is used for web development.";
// g is the global flag to find all matches in the string.
const regex1 = /JavaScript/g;

const matches1 = string1.match(regex1);

console.log("Matches for 'JavaScript':", matches1);




// Task 2: Write a regular expression to match all digits in a string. Log the matches.

// \d matches any digit (0-9).
// + matches one or more of the preceding element (digits in this case)

const text = "There are 123 apples and 456 oranges.";
const regex = /\d+/g;
const numberMatches = text.match(regex)
console.log(numberMatches)



// \d matches any single digit (0-9).
// \d+ matches one or more digits in a row.