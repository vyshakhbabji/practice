/*
MERGE TREE
You are given two binary trees root1 and root2.
Imagine that when you put one of them to cover the other,
some nodes of the two trees are overlapped while the others are not.
You need to merge the two trees into a new binary tree.
The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.
Otherwise, the NOT null node will be used as the node of the new tree.
 */

//Tree 1:
//      1
//     / \
//    3   2
//   /
//  5
//
// Tree 2:
//      2
//     / \
//    1   3
//     \   \
//      4   7
//
// Merged Tree:
//      3
//     / \
//    4   5
//   / \   \
//  5   4   7


//explanation
/*
1. when the node is null ,  u return non null node or handle it
2. If both nul , then exit
3. if bpth node exisits ,  then sum it
4. Recursively merge it
5. return merge tree
 */

const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree arrays
let treeArray1 = [1, 3, 2, 5];
let treeArray2 = [2, 1, 3, null, 4, null, 7];

let root1 = createTreeFromArray(treeArray1);
let root2 = createTreeFromArray(treeArray2);

console.log("Tree 1:");
printTree(root1);
console.log("Tree 2:");
printTree(root2);

// Function to merge two binary trees
function mergeTrees(root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    root1.val += root2.val;

    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
}


// Merge the trees
let mergedRoot = mergeTrees(root1, root2);
console.log("Merged Tree:");
printTree(mergedRoot);