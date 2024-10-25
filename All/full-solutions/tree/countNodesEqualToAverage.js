class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function countNodesEqualToAverage(root) {

    let counter = 0
    function dfs(node) {
        if(node===null) return [0,0]  /// sum , node - count

        let leftTree = dfs(node.left)
        let rightTree = dfs(node.right )

        let sum = node.val+leftTree[0]+rightTree[0]
        let count = 1+ leftTree[1]+rightTree[1]


        if (node.val === Math.floor(sum / count)) {
            console.log('somethig here ')
            counter++;
        }
        return [sum,count]
    }

    dfs(root)
    return counter
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
let treeArray = [4, 8, 5, 0, 1, null, 6];
let root = createTreeFromArray(treeArray);

console.log("Number of nodes equal to the average of their subtree:", countNodesEqualToAverage(root));
