class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findTarget(root, k) {
    let set = new Set();

    function dfs(node){

        if(node === null) return false

        if(set.has(k-node.val))
            return true

        set.add(node.val)

        return  dfs(node.left) || dfs(node.right)

    }

    return dfs(root)
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

console.log("Does the tree have two elements that sum to 9?", findTarget(root, 9)); // Should print true
console.log("Does the tree have two elements that sum to 28?", findTarget(root, 28)); // Should print false
