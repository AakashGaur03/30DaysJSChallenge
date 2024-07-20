// Activity 2: Destructuring


// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [1, 2, 3, 4, 5];

const [firstNumber, secondNumber, ...restNumbers] = numbers;



console.log(firstNumber, secondNumber, restNumbers);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
};

const { title, author, year } = book

console.log(title, author, year)