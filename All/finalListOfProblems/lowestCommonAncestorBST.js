const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [6,2,8,0,4,7,9,null,null,3,5];

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Binary Search Tree:");
printTree(root);


//The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants
var lowestCommonAncestor = function(root, p, q) {
    if(root===null) return null
    if(p.val<root.val && q.val< root.val) return lowestCommonAncestor(root.left, p,q)
    if(p.val>root.val && q.val>root.val) return lowestCommonAncestor(root.right,p,q)
    return root
};

// Example usage
let p = root.left;  // node with value 2
let q = root.right; // node with value 8

let lca = lowestCommonAncestorBST(root, p, q);

console.log("Lowest Common Ancestor:", lca.val);