// Activity 3: Container With Most Water
// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases.

// Container With Most Water
// Medium
// Topics
// Companies
// Hint
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

var maxArea = function(height) {
    let left = 0;                  // Initialize the left pointer
    let right = height.length - 1; // Initialize the right pointer
    let max = 0;                   // Initialize the maximum area to 0

    while (left < right) {         // Loop until the two pointers meet
        let min = Math.min(height[left], height[right]); // Find the smaller height
        let curr_max = min * (right - left); // Calculate the current area
        max = Math.max(curr_max, max); // Update the maximum area if current area is larger

        if (height[left] < height[right]) { // Move the pointer pointing to the shorter line
            left++;
        } else {
            right--;
        }
    }
    return max; // Return the maximum area found
}

height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// height = [1,1]

console.log(maxArea(height));