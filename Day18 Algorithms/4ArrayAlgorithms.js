// Activity 4: Array Algorithms


// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

const rotateArray = (arr, k) => {
    const n = arr.length
    k = k % n

    if (k === 0) return arr

    const part1 = arr.slice(-k)
    const part2 = arr.slice(0, n - k)

    return part1.concat(part2)
}


let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

console.log("Rotated Array:", rotateArray(arr, k));


// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.


const mergeSortedArrays = (arr1, arr2) => {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}


let sortedArray1 = [1, 3, 5, 7];
let sortedArray2 = [2, 4, 6, 8];

console.log("Merged Array:", mergeSortedArrays(sortedArray1, sortedArray2));