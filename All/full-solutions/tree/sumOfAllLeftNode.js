class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function sumOfLeftLeaves(root) {

    function sumOfLeft(node, isLeft){

        if(node===null) return 0

        let sum = 0

        if(node.left === null && node.right===null && isLeft){
            return  node.val
        }

        if(node.left!==null) sum+=sumOfLeft(node.left, true)
        if(node.right!==null) sum+=sumOfLeft(node.right,false)

        // return sumOfLeft(node.left, true) + sumOfLeft(node.right, false)
        return sum
    }

    return sumOfLeft(root,false)
}

// Example usage:
let treeArray = [3, 9, 20, null, null, 15, 7];
let root = createTreeFromArray(treeArray);

console.log("Sum of all left leaves:", sumOfLeftLeaves(root)); // Should print 24

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
