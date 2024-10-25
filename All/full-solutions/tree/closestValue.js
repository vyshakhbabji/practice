/*
Given the root node of a binary search tree (BST) and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
RangeSum BST
 */

const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [4, 2, 5, 1, 3];
let target = 3.714286;

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Binary Search Tree:");
printTree(root);

function closestValue(root, target) {


    let closest  = root.val

    while(root!=null){
        // Update the closest value if the current node is closer to the target
        if (Math.abs(root.val - target) < Math.abs(closest - target) ||
            (Math.abs(root.val - target) === Math.abs(closest - target) && root.val < closest)) {
            closest = root.val;
        }
        if(target<root.val) {root = root.left}
        else {root = root.right}

    }

    return closest
}


// Find the closest value
let closestVal = closestValue(root, target);

console.log(`Closest value to ${target}:`, closestVal);