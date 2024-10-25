class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Helper function to create a tree from an array representation
function createTreeFromArray(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let currentNode = queue.shift();

        if (arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        i++;
    }

    return root;
}

// Helper function to find a node by value
function findNode(root, val) {
    if (root === null) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}


function traverse(root) {

    let inorderArray = []
    let preorderArray = []
    let postorderArray = []

    function inorder(node) {
        //left root right
        if(node===null) return
        inorder(node.left)
        inorderArray.push(node.val)
        inorder(node.right)
    }

    function preorder(node) {
        //root left right
        if(node===null) return
        preorderArray.push(node.val)
        preorder(node.left)
        preorder(node.right)
    }

    function postorder(node) {
        //left right root
        if(node===null) return
        postorder(node.left)
        postorder(node.right)
        postorderArray.push(node.val)
    }

    inorder(root)
    preorder(root)
    postorder(root)

    console.log("Inorder Traversal:", inorderArray);
    console.log("Preorder Traversal:", preorderArray);
    console.log("Postorder Traversal:", postorderArray);



}


// Example usage:
let treeArray = [1, 2, 3, 4, 5, 6, 7];
/*/

        1
       / \
      2   3
    / \   / \
    4  5  6  7

 */

let root = createTreeFromArray(treeArray);


traverse(root)

