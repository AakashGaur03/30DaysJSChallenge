// Activity 4: Binary Tree

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

//     2
//   /   \
// 1       3
console.log(root)
console.log(root.value)
console.log(root.left.value)
console.log(root.right.value)

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.


class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new TreeNode(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    inOrderTraversal() {
        this.inOrder(this.root)
    }

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left)
            console.log(node.value)
            this.inOrder(node.right)
        }
    }
}


const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);
console.log("-----------------------------")
tree.inOrderTraversal();

//     5
//    / \
//   3   7
//  / \ / \
// 2  4 6  8