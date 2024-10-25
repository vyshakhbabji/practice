const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [1, null, 2, 3];

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Original Tree:");
printTree(root);

// Function to perform iterative inorder traversal of the binary tree
function inorderTraversalIterative(root) {

    const res = []
    if(root===null) return res

    const stack = []
    let cur = root

    while(stack.length>0  || cur!=null){

        while(cur!=null){
            stack.push(cur)
            cur = cur.left
        }

        let node  = stack.pop()
        res.push(node.val)

        cur = node.right
    }

    return  res

}

// Perform inorder traversal of the tree
let traversalResult = inorderTraversalIterative(root);

console.log("Inorder Traversal Result (Iterative):", traversalResult);