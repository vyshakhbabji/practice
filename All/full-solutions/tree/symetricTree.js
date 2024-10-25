
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isSymmetric(root) {

    if(root === null) return  true;

    function isMirror(node1, node2){

        if (node1 === null && node2 === null) return true;
        if (node1 === null || node2 === null) return false;

        return (node1.val === node2.val &&
            isMirror(node1.left, node2.right) &&
            isMirror(node1.right, node2.left));

    }

    return isMirror(root.left, root.right);
}

// Example usage:
let treeArray = [1, 2, 2, 3, 4, 4, 3];
let root = createTreeFromArray(treeArray);

console.log("Is the tree symmetric?", isSymmetric(root)); // Should print true

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
