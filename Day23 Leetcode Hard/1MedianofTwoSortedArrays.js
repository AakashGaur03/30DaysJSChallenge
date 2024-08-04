// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.


// Median of Two Sorted Arrays
// Solved
// Hard
// Topics
// Companies
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).



// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


var findMedianSortedArrays = function (nums1, nums2) {
    const n = nums1.length
    const m = nums2.length
    let res = []
    let i = 0
    let j = 0

    while (i < n && j < m) {
        if (nums1[i] < nums2[j]) {
            res.push(nums1[i])
            i++
        } else {
            res.push(nums2[j])
            j++

        }
    }
    while (i < n) {
        res.push(nums1[i])
        i++
    }
    while (j < m) {
        res.push(nums2[j])
        j++
    }
    console.log(res)

    const mid = Math.floor(res.length / 2)
    if (res.length % 2 === 0) {
        return (res[mid] + res[mid - 1]) / 2
    } else {
        return res[mid]
    }

};

nums1 = [1, 3], nums2 = [2]
// nums1 = [1, 2], nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2))