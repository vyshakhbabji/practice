const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [1, null, 2, 3];

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Original Tree:");
printTree(root);

// Function to perform inorder traversal of the binary tree
function preorderTraversal(root) {
    let res = []

    function traversal(root){
        if(root===null) return null

        res.push(root.val)
        traversal(root.left)
        traversal(root.right)
    }

    traversal(root)
    return res
}

// Perform inorder traversal of the tree
let traversalResult = preorderTraversal(root);

console.log("Inorder Traversal Result:", traversalResult);