// Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "The Good Place",
    books: [
        {
            title: "An Inspiring World",
            author: "Filaner",
            year: "1988"
        },
        {
            title: "An Deaf Rich Man",
            author: "Adam Johnson",
            year: "1945"
        }, {
            title: "Millionaires",
            author: "Steve Becker",
            year: "2011"
        }
    ]
}

console.log(library)
// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log("Library Name : ", library.name)

// for (let i = 0; i < library.books.length; i++) {
//     console.log(library.books[i].title)
// }

library.books.forEach((book) => console.log(book.title))