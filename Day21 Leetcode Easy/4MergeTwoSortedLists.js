// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.

// Merge Two Sorted Lists
// Easy
// Topics
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = function (list1, list2) {
    let newList = new ListNode()
    let crr = newList

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            crr.next = list1;
            list1 = list1.next;
        } else {
            crr.next = list2;
            list2 = list2.next;
        }
        crr = crr.next;
    }

    if (list1 !== null) crr.next = list1
    if (list2 !== null) crr.next = list2

    return newList.next;

};

list1 = [1, 2, 4], list2 = [1, 3, 4]
// list1 = [], list2 = []
// list1 = [], list2 = [0]

console.log(mergeTwoLists(list1, list2));