// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function recursiveBinarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1

    const mid = Math.floor((low + high) / 2)

    if (arr[mid] === target) return mid

    if (arr[mid] > target) return recursiveBinarySearch(arr, target, low, mid - 1)

    return recursiveBinarySearch(arr, target, mid + 1, high)

}


// Test cases
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(recursiveBinarySearch(arr, 5));
console.log(recursiveBinarySearch(arr, 1));
console.log(recursiveBinarySearch(arr, 10));
console.log(recursiveBinarySearch(arr, 0));
console.log(recursiveBinarySearch(arr, 11));

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.


const countOccurance = (arr, target) => {
    if (arr.length === 0) return 0;

    let count = arr[0] === target ? 1 : 0
    return count + countOccurance(arr.slice(1), target)
}

// Test cases
console.log(countOccurance([1, 2, 3, 4, 1, 1, 5, 1], 1));
console.log(countOccurance([1, 2, 3, 4, 1, 1, 5, 1], 2));
console.log(countOccurance([1, 2, 3, 4, 1, 1, 5, 1], 6));
console.log(countOccurance([], 1));
console.log(countOccurance([1, 1, 1, 1, 1], 1));         