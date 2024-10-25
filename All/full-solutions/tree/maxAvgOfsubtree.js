class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maximumAverageSubtree(root) {
    let maxAvg = -Infinity

    function dfs(node){
        if(node === null) return [0,0]

        let leftsum = dfs(node.left)
        let rightsum= dfs(node.right)

        let sum = node.val + leftsum[0]+rightsum[0]
        let count  = 1 + leftsum[1]+rightsum[1]
        let avg =  sum / count

        maxAvg = Math.max(avg, maxAvg)

        return [sum , count  ]

    }


    dfs(root)
    return maxAvg
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
let treeArray = [5, 6, 1];
let root = createTreeFromArray(treeArray);

console.log("Maximum average of any subtree:", maximumAverageSubtree(root));
