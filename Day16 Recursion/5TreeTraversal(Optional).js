// Activity 5: Tree Traversal (Optional)

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const inOrderTraversal = (node) => {
    if (node === null) return

    inOrderTraversal(node.left)
    console.log(node.value)
    inOrderTraversal(node.right)
}


// Test case: Create a sample binary tree
//        1
//       / \
//      2   3
//     / \
//    4   5


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root);


// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
class TreeNode2 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const calculateDepth = (node) => {
    if (node === null) return 0

    const leftDepth = calculateDepth(node.left)
    const rightDepth = calculateDepth(node.right)

    return Math.max(leftDepth, rightDepth) + 1

}

// Test cases
// Test case 1: Create a sample binary tree
//        1
//       / \
//      2   3
//     / \
//    4   5



const root1 = new TreeNode2(1);
root1.left = new TreeNode2(2);
root1.right = new TreeNode2(3);
root1.left.left = new TreeNode2(4);
root1.left.right = new TreeNode2(5);

console.log(calculateDepth(root1));


const root2 = new TreeNode2(1);
root2.left = new TreeNode2(2);
root2.left.left = new TreeNode2(3);
root2.left.left.left = new TreeNode2(4);

console.log(calculateDepth(root2));

const root3 = null;

console.log(calculateDepth(root3));