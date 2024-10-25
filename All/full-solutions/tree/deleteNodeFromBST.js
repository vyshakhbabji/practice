// Find the node: Use the properties of BST to locate the node to be deleted.
//     Delete the node:
//     Case 1: If the node is a leaf, simply remove it.
//     Case 2: If the node has one child, replace it with its child.
//     Case 3: If the node has two children, find the in-order successor (smallest node in the right subtree), r
//Replace the node's value with the in-order successor's value, and delete the in-order successor.

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function deleteNode(root,key){

    if(root===null) return root

    if(key<root.val){
        root.left = deleteNode(root.left, key)
    }
    else if(key>root.val){
        root.right = deleteNode(root.right,key)
    }
    else{


        if(root.left === null) return root.right
        if(root.right=== null) return  root.left

        root.val = minNode(root.right)

        root.right = deleteNode(root.right, root.val)

    }


    return root
}

function minNode(node){
    let cur = node
    while(cur.left!=null){
        cur = cur.left
    }
    return cur.val
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

// Example usage:
let treeArray = [5, 3, 6, 2, 4, null, 7];
let root = createTreeFromArray(treeArray);

console.log("Tree before deletion:");
console.log(JSON.stringify(root, null, 2));

root = deleteNode(root, 3);

console.log("Tree after deleting 3:");
console.log(JSON.stringify(root, null, 2));

