const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [1, null, 2, 3];

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Original Tree:");
printTree(root);

// Function to perform iterative inorder traversal of the binary tree
function preorderTraversalIterative(root) {
    const res = []
    if(root ===null){
        return res
    }

    let stack = []
    let cur = root

    stack.push(cur)

    while(stack.length>0 ){

        const node  = stack.pop()
        res.push(node.val)

        if(node.right){
            stack.push(node.right)
        }
        if(node.left){
            stack.push(node.left)
        }


    }

    return  res

}

// Perform inorder traversal of the tree
let traversalResult = preorderTraversalIterative(root);

console.log("Inorder Traversal Result (Iterative):", traversalResult);