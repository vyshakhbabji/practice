class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function averageOfLevels(root) {
    if (root === null) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            levelSum += node.val;

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        let levelAvg = levelSum / levelSize;
        result.push(levelAvg);
    }

    return result;
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
let treeArray = [3, 9, 20, null, null, 15, 7];
let root = createTreeFromArray(treeArray);

console.log("Average of levels in the binary tree:", averageOfLevels(root));
