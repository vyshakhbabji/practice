/*
Given the root of a binary tree and an integer targetSum,
return all root-to-leaf paths where the sum of the node values in the path equals targetSum.
Each path should be returned as a list of the node values, not node references.
 */


//Time and Space Complexity:
//
// Time Complexity: O(N), where N is the number of nodes in the tree. In the worst case, we might need to visit all nodes.
// Space Complexity: O(H), where H is the height of the tree. This is due to the recursion stack.
// In a balanced tree, this would be O(log N), but in the worst case (skewed tree), it could be O(N).

function getPath(root , targetSum){

}

/*
Given the root node of a binary search tree (BST) and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
RangeSum BST
 */

const { createTreeFromArray, printTree } = require("./TreeUtils");

let treeArray = [5,4,8,11,null,13,4,7,2,null,null,5,1];
let targetSum = 22;

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Binary Search Tree:");
printTree(root);


// Find the closest value
let path
    = getPath(root, targetSum);

console.log(`pathSumVal value to ${targetSum}:`, path);