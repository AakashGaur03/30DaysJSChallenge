// Activity 5: Multi-dimensional Arrays


// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let twoDArray = [[1, 2, 3, 15], [4, 5, 6, 56], [10, 11, 12, 45]]

console.log(twoDArray)
// Task 13: Access and log a specific element from the two-dimensional array.

console.log(twoDArray[1][2])
console.log(twoDArray[0][0])
console.log(twoDArray[2][2])
console.log(twoDArray[1][12])

let arrSize = twoDArray.length
let elementSize = twoDArray[0].length

for (let i = 0; i < arrSize; i++) {
    for (let j = 0; j < elementSize; j++) {
        console.log(twoDArray[i][j])
    }
}