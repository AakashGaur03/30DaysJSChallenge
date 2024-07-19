// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

let book = {
    title: "An Inspiring World",
    author: "Filaner",
    year: "1988"
}

for (let prop in book) {
    console.log(`${prop} : ${book[prop]}`);
}



// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log("Keys : ", Object.keys(book))
console.log("Values : ", Object.values(book))
