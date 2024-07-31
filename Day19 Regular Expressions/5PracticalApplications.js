// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.


// ^: Asserts the position at the start of the string.
// (?=.*[a-z]): Ensures that the password contains at least one lowercase letter.
// (?=.*[A-Z]): Ensures that the password contains at least one uppercase letter.
// (?=.*\d): Ensures that the password contains at least one digit.
// (?=.*[\W_]): Ensures that the password contains at least one special character (non-word character or underscore).
// .{8,}: Ensures that the password is at least 8 characters long.
// $: Asserts the position at the end of the string.


function validatePassword(password) {
    // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    const isValid = regex.test(password);

    if (isValid) {
        console.log("Password is valid.");
    } else {
        console.log("Password is invalid.");
    }
}

// Test examples
validatePassword("Password1!");
validatePassword("password");


// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

// ^(https?:\/\/): Ensures the URL starts with http:// or https://.
// ([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}: Ensures the URL has a valid domain structure.
// (:\d+)?: Optionally allows a port number.
// (\/[\w\d-]*)*: Optionally allows paths.
// (\?[;&a-zA-Z\d%_.,+=-]*)?: Optionally allows query parameters.
// (# [;&a-zA-Z\d%_.,+=-]*)?: Optionally allows fragment identifiers.
// $: End of the string.

function validateURL(url) {
    const regex = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[\w\d-]*)*(\?[;&a-zA-Z\d%_.,+=-]*)?(#[;&a-zA-Z\d%_.,+=-]*)?$/;
    const isValid = regex.test(url);

    if (isValid) {
        console.log("URL is valid.");
    } else {
        console.log("URL is invalid.");
    }
}

// Test examples
validateURL("https://www.example.com");
validateURL("http://example.com/path?query=123");
validateURL("example.com");
validateURL("https://example");
validateURL("http://example.com:8080/path");            
