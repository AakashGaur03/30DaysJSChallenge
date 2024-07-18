// Activity 4: Array Iteration


// Task 10: Use a for loop to iterate over the array and log each element to the console.

let arr = [12, 23, 43, 54, 75, 86, 37]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

arr.forEach((elem, index) => console.log(`Element at ${index} `, elem))