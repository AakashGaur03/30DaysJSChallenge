// Activity 3: Grouping and Capturing


// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

const text = "(123) 456-7890";

const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches = text.match(regex);

const areaCode = matches[1]
const centralOfficeCode  = matches[2]
const lineNumber  = matches[3]

console.log("Area Code:", areaCode);
console.log("Central Office Code:", centralOfficeCode);
console.log("Line Number:", lineNumber);

// \((\d{3})\) matches the area code in the format (123):
// \( and \) match the literal parentheses.
// (\d{3}) captures exactly three digits.
// \s matches a space character.
// (\d{3}) captures the central office code, exactly three digits.
// - matches the literal hyphen.
// (\d{4}) captures the line number, exactly four digits.


// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.


const email = "user@example.com";
const regex2 = /^([^@]+)@([^@]+)$/;
const matches2 = email.match(regex2);

if (matches2) {
  const username = matches2[1];
  const domain = matches2[2];

  console.log("Username:", username);
  console.log("Domain:", domain);
} else {
  console.log("No matches found");
}


// ^ asserts the start of the string.
// ([^@]+) captures one or more characters that are not the @ symbol (this is the username).
// @ matches the literal @ symbol.
// ([^@]+) captures one or more characters that are not the @ symbol (this is the domain).
// $ asserts the end of the string.