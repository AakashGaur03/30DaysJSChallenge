// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkNumber(number){
    if(number % 2 === 0){
        console.log(`${number} is even.`);
    }
    else{
        console.log(`${number} is odd.`);
    }
}

checkNumber(4)
checkNumber(5)
checkNumber(123)

// Task 2: Write a function to calculate the square of a number and return the result.

function calculateSquare(number){
    return number * number;
}

console.log(calculateSquare(4));
console.log(calculateSquare(3));
console.log(calculateSquare(8));
console.log(calculateSquare(34));