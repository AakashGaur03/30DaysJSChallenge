// Activity 4: The this Keyword


// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

let book = {
    title:"An Inspiring World",
    author:"Filaner",
    year:"1988",
    getTitle: function(){
        return `Title : ${this.title} and Year : ${this.year}`;
    }
}

console.log(book.getTitle());