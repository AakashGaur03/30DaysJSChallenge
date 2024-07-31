// Activity 4: Assertions and Boundaries


// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const text = "Hello world! This is a test. Hello again";

const regex = /^\w+/;

const matches = text.match(regex);

// console.log(matches);

// ^: Asserts the position at the start of a string.
// \w+: Matches one or more word characters (equivalent to [a-zA-Z0-9_]).

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const text2 = "Hello world! This is a test. Hello again";
const regex2 = /\w+$/;
const matches2 = text2.match(regex2);
console.log(matches2);
