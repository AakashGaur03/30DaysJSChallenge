// Activity 2: Character Classes and Quantifiers

// x*, x+, x?, x{n}, x{n,}, x{n,m}	    Quantifiers


// [xyz], [^xyz], ., \d, \D, \w, \W, \s, \S, \t, \r, \n, \v, \f, [\b], \0, \cX, \xhh, \uhhhh, \u{hhhh}, x|y	       Character classes



// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const text = "This is a Test String with Some Capitalized Words.";

const regex = /\b[A-Z][a-z]*\b/g;

const matches = text.match(regex);

console.log(matches);


// \b asserts a word boundary, ensuring the match is at the start or end of a word.
// [A-Z] matches any uppercase letter from A to Z.
// [a-z]* matches zero or more lowercase letters.
// \b asserts another word boundary to ensure the match is a complete word.
// The g flag ensures that all matches in the string are found.


// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.


const text2 = "There are 123 apples, 45 oranges, and 6789 bananas.";
const regex2 = /\d+/g;

const matches2 = text2.match(regex2); // Find all matches

console.log(matches2);