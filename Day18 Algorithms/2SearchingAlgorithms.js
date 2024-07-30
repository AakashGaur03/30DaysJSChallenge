// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

const linearSearchAlgo = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) return `${target} value found at ${i}`;
    }
    return `${target} value not found`;
}

let numbers = [7, 5, 3, 9, 2, 1]
let target = 5
console.log(linearSearchAlgo(numbers, target))

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.


const binarySearchAlgo = (arr, target) => {
    arr.sort((a, b) => a - b)
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return `${target} value found at index ${mid}`;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return `${target} value not found`
}
console.log(binarySearchAlgo(numbers, target))
