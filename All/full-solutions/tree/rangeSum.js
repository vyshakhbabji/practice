/*
Given the root node of a binary search tree (BST) and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
RangeSum BST
 */

const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [10, 5, 15, 3, 7, null, 18];
let low = 7;
let high = 15;

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Binary Search Tree:");
printTree(root);

function rangeSumBST(root, low, high) {

    if(root === null) return 0

    let sum = 0

    if(root.val>= low && root.val<= high) sum+=root.val

    if(root.val> low) sum+=rangeSumBST(root.left, low,high)
    if (root.val< high) sum+=rangeSumBST(root.right, low,high)


    return sum

}

// Calculate the range sum
let rangeSum = rangeSumBST(root, low, high);

console.log(`Sum of values in range [${low}, ${high}]:`, rangeSum);