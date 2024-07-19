// Object Methods


// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

let book = {
    title: "An Inspiring World",
    author: "Filaner",
    year: "1988"
}

book.displayInfor = function () {
    console.log(`Title : ${book.title}, Author : ${book.author}, Year : ${book.year}`)
}
book.displayInfor2 = function () {
    console.log(`Title : ${this.title}, Author : ${this.author}, Year : ${this.year}`)
}

book.displayInfor();
book.displayInfor2();

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function (year) {
    this.year = year;
}

book.updateYear("2000");
console.log(book)