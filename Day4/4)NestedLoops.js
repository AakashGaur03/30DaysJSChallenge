// Nested Loops

// Task 7: Write a program to print a pattern using nested for loops
// * 
// * *
// * * *
// * * * *
// * * * * *
const printPattern = (n) => {

    for (let i = 0; i < n; i++) {
        let row = " "
        for (let j = 0; j <= i; j++) {
            row += "* "
        }
        console.log(row)
    }
}

printPattern(5)
printPattern(6)
printPattern(7)