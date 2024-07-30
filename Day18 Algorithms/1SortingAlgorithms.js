// Activity 1: Sorting Algorithms

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
// Bubble sort algorithm is an algorithm that sorts an array by comparing two adjacent elements and swapping them if they are not in the intended order
const bubbleSortAlgo = (arr) => {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

let numbers = [5, 2, 8, 1, 9, 3, 6, 4, 7]

console.log("Bubble Sort:", bubbleSortAlgo(numbers))




// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

// Selection sort is a simple and efficient algorithm that works on selecting either the smallest or the largest element of the list or array and moving it to the correct position

const selectionSortAlgo = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}


console.log("Selection Sort:", selectionSortAlgo(numbers));


// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.


// Quick sort is one of the sorting algorithms that works on the idea of divide and conquer. It takes an element as a pivot and partitions the given array around that pivot by placing it in the correct position in the sorted array. The pivot element can be selected in the following ways:

// Select the First element as a pivot
// Select the Last element as a pivot
// Select the Middle element as a pivot
// Select a Random element as a pivot

const quickSortAlgo = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    const pivot = arr[Math.floor(arr.length / 2)]
    const left = []
    const right = []

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSortAlgo(left), pivot, ...quickSortAlgo(right)]
}

console.log("Quick Sort:", quickSortAlgo(numbers));