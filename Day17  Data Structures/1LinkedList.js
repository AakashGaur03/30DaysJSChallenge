// Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

const node1 = new Node(1)
const node2 = new Node(2)

node1.next = node2

console.log(node1)
console.log(node1.value)
console.log(node1.next)
console.log(node1.next.value)

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }

class LinkedList {
    constructor() {
        this.head = null
    }

    add(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode
        }
    }

    remove() {
        if (this.head == null) {
            console.log("List is Empty")
            return
        }
        if (this.head.next === null) {
            this.head = null
            return
        }
        let current = this.head
        while (current.next.next !== null) {
            current = current.next
        }
        current.next = null
    }

    display() {
        if (this.head === null) {
            console.log("List is Empty")
            return
        }
        let current = this.head
        while (current !== null) {
            console.log(current.value)
            current = current.next
        }
    }
}


const list = new LinkedList();
console.log("----------------------------------------------")
list.add(1);
list.add(2);
list.add(3);
list.display()
list.remove()
list.display()
list.remove()
list.remove()
list.display()
list.remove()
