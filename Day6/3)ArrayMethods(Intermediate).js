// Array Methods (Intermediate)


// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let nums = [1, 2, 3, 4, 5, 6]

let doubledNum = nums.map(sNum => sNum * 2)

console.log("All Elements of array : ", nums)
console.log("Doubled value : ", doubledNum)


// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let evenNum = nums.filter(sNum => sNum % 2 == 0)

console.log("Even Number from array : ", evenNum)

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sumNums = nums.reduce((acc, curr) => acc + curr)

// acc is accumulated value and curr is the current inde
// in Start acc is first element and curr is second element
// After that the sum is assigned to acc and next index to curr
// Step 1 acc = 1 ,  curr = 2  acc+curr = 3
// Step 2 acc = 3 ,  curr = 3  acc+curr = 6
// Step 3 acc = 6 ,  curr = 4  acc+curr = 10
// Step 4 acc = 10 , curr = 5  acc+curr = 15
// Step 5 acc = 15 , curr = 6  acc+curr = 21
// Step 6 acc = 21 return acc

console.log(sumNums)