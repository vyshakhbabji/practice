class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function bstToDoublyList(root) {
    if (!root) return null;

    let head = null, prev = null;

    function inorder(node) {
        if (!node) return;

        // Recursively traverse the left subtree
        inorder(node.left);

        // Convert the BST node to a doubly linked list node
        if (!head) {
            // The first node becomes the head of the doubly linked list
            head = node;
        } else {
            // Link the previous node (prev) with the current node (node)
            prev.right = node;
            node.left = prev;
        }

        // Move prev to the current node
        prev = node;

        // Recursively traverse the right subtree
        inorder(node.right);
    }

    inorder(root);

    // Make the doubly linked list circular (optional)
    head.left = prev;
    prev.right = head;

    return head;
}

// Example usage:
// Let's create a simple BST:
//       4
//      / \
//     2   5
//    / \
//   1   3

const root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

const head = bstToDoublyList(root);

// Now 'head' points to the smallest element of the doubly linked list
// You can traverse the list to verify it
let current = head;
do {
    console.log(current.val);
    current = current.right;
} while (current !== head);
