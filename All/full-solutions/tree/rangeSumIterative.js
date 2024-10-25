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

function rangeSumBSTIterative(root, low, high) {

    let sum = 0
    let q  = []
    q.push(root)

    while(q.length>0){
        let node = q.shift()

        if(node!=null){
            if(node.val>=low && node.val<=high){
                sum+=node.val
            }
            if(node.val>low){
                q.push(node.left)
            }
            if(node.val<high){
                q.push(node.right)
            }
        }
    }

    return sum

}

// Calculate the range sum
let rangeSum = rangeSumBSTIterative(root, low, high);

console.log(`Sum of values in range [${low}, ${high}]:`, rangeSum);