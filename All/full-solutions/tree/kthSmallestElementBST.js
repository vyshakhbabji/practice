class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


// inorder on bst produces sorted array  ...
function kthSmallest(root, k) {
    let count =  0
    let res = null

    function inorderTraversal(node){

        if(node === null  || res !== null) return

        inorderTraversal(node.left)


        count++

        if(count === k ){
            res = node.val
            return;
        }

        inorderTraversal(node.right)
    }
    inorderTraversal(root)
    return k
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
let treeArray = [3, 1, 4, null, 2];
let root = createTreeFromArray(treeArray);

console.log("Kth smallest element in the BST:", kthSmallest(root, 1)); // Should print 1
console.log("Kth smallest element in the BST:", kthSmallest(root, 2)); // Should print 2
console.log("Kth smallest element in the BST:", kthSmallest(root, 3)); // Should print 3
console.log("Kth smallest element in the BST:", kthSmallest(root, 4)); // Should print 4
