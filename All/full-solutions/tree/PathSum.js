/*
Given the root of a binary tree and an integer
 targetSum, return true if the tree has a root-to-leaf path
 such that adding up all the values along the path equals targetSum.
 A leaf is a node with no children.
 */


//Time and Space Complexity:
//
// Time Complexity: O(N), where N is the number of nodes in the tree. In the worst case, we might need to visit all nodes.
// Space Complexity: O(H), where H is the height of the tree. This is due to the recursion stack.
// In a balanced tree, this would be O(log N), but in the worst case (skewed tree), it could be O(N).

function hasPath(root , targetSum){

    if (root===null) return false

    if(root.left === null && root.right === null){
        return  root.val === targetSum
    }


    return hasPath(root.left, targetSum - root.val ) || hasPath(root.right, targetSum-root.val)
}

/*
Given the root node of a binary search tree (BST) and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
RangeSum BST
 */

const { createTreeFromArray, printTree } = require("./TreeUtils");

let treeArray = [5,4,8,11,null,13,4,7,2,null,null,null,1];
let targetSum = 22;

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Binary Search Tree:");
printTree(root);


// Find the closest value
let pathSumVal = hasPath(root, targetSum);

console.log(`pathSumVal value to ${targetSum}:`, pathSumVal);