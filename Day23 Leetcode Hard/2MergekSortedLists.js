// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.

// Merge k Sorted Lists
// Solved
// Hard
// Topics
// Companies
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.



// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) return null
    while (lists.length > 1) {
        let list1 = lists.shift()
        let list2 = lists.shift()

        let merged = mergeTwoList(list1, list2)
        lists.push(merged)
    }
    return lists[0]
};

const mergeTwoList =  (list1, list2)=> {
    let dummy = new ListNode(0)
    let head = dummy;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            dummy.next = list1
            list1 = list1.next
        } else {
            dummy.next = list2
            list2 = list2.next
        }
        dummy = dummy.next
    }
    if (list1 == null) {
        dummy.next = list2
    } else {
        dummy.next = list1
    }
    return head.next
}


lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
// lists = []
// lists = [[]]

console.log(mergeKLists(lists))