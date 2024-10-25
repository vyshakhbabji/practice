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



function lowestCommonAncestor(p, q) {
    // Helper function to get the depth of a node
    function getDepth(node) {
        let depth = 0;
        while (node) {
            node = node.parent;
            depth++;
        }
        return depth;
    }

    // Get the depth of both nodes
    let depthP = getDepth(p);
    let depthQ = getDepth(q);

    // Align both nodes to the same level
    while (depthP > depthQ) {
        p = p.parent;
        depthP--;
    }
    while (depthQ > depthP) {
        q = q.parent;
        depthQ--;
    }

    // Move both nodes upwards until we find the LCA
    while (p !== q) {
        p = p.parent;
        q = q.parent;
    }

    return p;
}
