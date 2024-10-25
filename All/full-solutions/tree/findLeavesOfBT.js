//Given a binary tree,
// collect and remove all the leaf nodes, then repeat the process until the tree is empty.
// Return a list of lists, where each list contains the leaf nodes removed at each step.


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findLeaves(root) {

    let res= []

    function removeLeaves (node){
        if(node === null ) return -1

        const left  = removeLeaves(node.left)
        const right  = removeLeaves(node.right)

        const height  = Math.max(left,right) +1

        if(!res[height]){
            res[height ] = []
        }

        res[height].push(node.val)

        return  height


    }


    removeLeaves(root)
    return res
}

// Example usage:
let treeArray = [1, 2, 3, 4, 5, null, 6];
let root = createTreeFromArray(treeArray);

console.log("Leaves of the tree at each step:", findLeaves(root)); // Should print [[4, 5, 6], [2, 3], [1]]

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
