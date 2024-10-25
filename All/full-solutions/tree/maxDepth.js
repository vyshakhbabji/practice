const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [3, 9, 20, null, null, 15, 7];

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Original Tree:");
printTree(root);

// Function to find the maximum depth of the binary tree
function maxDepth(root) {

    if(root === null) return 0

    const leftDepth = 1+ maxDepth(root.left)
    const rightDepth = 1+maxDepth(root.right)

    return  Math.max(leftDepth,rightDepth)

}

// Find the maximum depth of the tree
let depth = maxDepth(root);

console.log("Maximum Depth of the Tree:", depth);