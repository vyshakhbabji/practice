
/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed.
All houses in this place are arranged in a binary tree.
It will automatically contact the police if two directly-linked houses were robbed on the same night.
Return the maximum amount of money the robber can rob tonight without alerting the police.
 */

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function rob(root) {
    function dfs(node) {
        if (node === null) return [0, 0];

        let left = dfs(node.left);
        let right = dfs(node.right);

        // rob this node
        let rob = node.val + left[1] + right[1];
        // do not rob this node
        let notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

        return [rob, notRob];
    }

    let result = dfs(root);
    return Math.max(result[0], result[1]);
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
let treeArray = [3, 2, 3, null, 3, null, 1];
let root = createTreeFromArray(treeArray);

console.log("Maximum amount that can be robbed:", rob(root)); // Should print 7
