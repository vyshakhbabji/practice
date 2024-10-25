class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
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

// Input tree array
let treeArray = [1,2,3,null,5,null,4]

// Create the tree from the array
let root = createTreeFromArray(treeArray);
//
// console.log("Binary Tree:");
// // printTree(root);

function rightSideView(root) {
    if (root === null) return [];

    let q = [];
    q.push(root);

    let res = [];

    // Iterate the tree with BFS
    while (q.length > 0) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let node = q.shift();
            if (i === len - 1) {
                res.push(node.val);
            }
            if (node.left !== null) q.push(node.left);
            if (node.right !== null) q.push(node.right);
        }
    }

    return res;
}


// Get the right side view of the tree
let rightView = rightSideView(root);

console.log("Right Side View:", rightView);

/*
Time and Space Complexity:

Time Complexity: O(N), where N is the number of nodes in the tree. We visit each node exactly once.
Space Complexity: O(W), where W is the maximum width of the tree.
In the worst case, the last level of a perfect binary tree contains N/2 nodes, so the space complexity is O(N).
 */