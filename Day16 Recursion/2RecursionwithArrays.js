// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr) {
    if (arr.length == 0) return 0;
    console.log(arr.slice(1))
    return arr[0] + sumArray(arr.slice(1))
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([]));
console.log(sumArray([5, 10, -2]));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

const maxElement = (maxArr) => {
    if (maxArr.length === 1) return maxArr[0];
    const restMax = maxElement(maxArr.slice(1))
    return maxArr[0] > restMax ? maxArr[0] : restMax

}

const test1 = [1, 5, 3, 9, 2];
const test2 = [-1, -5, -3, -9, -2];
const test3 = [10];
const test4 = [0, 0, 0, 0, 0];

console.log(`Max of [${test1}]:`, maxElement(test1));
console.log(`Max of [${test2}]:`, maxElement(test2));
console.log(`Max of [${test3}]:`, maxElement(test3));
console.log(`Max of [${test4}]:`, maxElement(test4));







// maxElement([1, 5, 3, 9, 2])
// const restMax = maxElement([5, 3, 9, 2]);
// maxElement([5, 3, 9, 2])
// const restMax = maxElement([3, 9, 2]);
// maxElement([3, 9, 2])
// const restMax = maxElement([9, 2]);
// maxElement([9, 2])
// const restMax = maxElement([2]);
// maxElement([2])
// Base Case True
// return 2;

// Back to Third Recursive Call
// maxElement([9, 2])
// return 9 > 2 ? 9 : 2; // returns 9

// Back to Second Recursive Call
// maxElement([3, 9, 2])
// return 3 > 9 ? 3 : 9; // returns 9

// Back to First Recursive Call
// maxElement([5, 3, 9, 2])
// return 5 > 9 ? 5 : 9; // returns 9

// Back to Initial Call
// maxElement([1, 5, 3, 9, 2])
// return 1 > 9 ? 1 : 9; // returns 9

// The function returns 9