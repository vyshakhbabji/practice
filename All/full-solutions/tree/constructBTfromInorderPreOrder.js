function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function buildTree(preorder, inorder) {

    /*
        Preorder is node -> left -> right
        Inorder is left -> node -> right

        Preorder properties:
        1. first element is root
        2. the subsequennt elements divided into left and right subtrees based on inorder traversal

        inorder traversal :
        1. root divides right and left subtrees
        2. left subtree consisites of elemnts before the root
        3. right subtree consisits of elements after the root

        Steps to solve :
        1. use the preorder first elemtn to identify the root
        2. find the root in inorder array and then divide the subtree into left and right
        3. recursiely build subree using corresponding segments of inorder and preorder

     */
    let rootval = preorder[0]

    let root  = new TreeNode(rootVal)

    let rootIndex = inorder.indexOf(rootval)

    //left tree
    let leftInorder  = inorder.slice(0, rootIndex)
    let leftPreorder = preorder.slice(1,rootIndex+1)

    //right tree
    let rightInorder = inorder.slice((rootIndex+1))
    let rightPreorder = preorder.slice(rootIndex+1)


    //process left and right tree
    root.left = buildTree(leftPreorder,leftInorder)
    root.right = buildTree(rightPreorder,rightInorder)

    return root



}

// Helper function to print the tree (in-order traversal)
function printTree(root) {
    if (root === null) return;
    printTree(root.left);
    console.log(root.val);
    printTree(root.right);
}

// Example usage
// Example usage:
let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

let root = buildTree(preorder, inorder);

console.log("Reconstructed Tree (in-order traversal):");
printTree(root);