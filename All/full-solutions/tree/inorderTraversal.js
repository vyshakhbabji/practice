const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [1, null, 2, 3];

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Original Tree:");
printTree(root);

// Function to perform inorder traversal of the binary tree
function inorderTraversal(root) {
    let res = []

    function traversal(root){
        if(root===null) return null
        traversal(root.left)
        res.push(root.val)
        traversal(root.right)
    }

    traversal(root)
    return res
}

// Perform inorder traversal of the tree
let traversalResult = inorderTraversal(root);

console.log("Inorder Traversal Result:", traversalResult);