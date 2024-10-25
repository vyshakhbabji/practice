//most frequently occured elements


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findMode(root) {

    let count = {}
    let maxCount  = 0
    let modes  = []

    function inorderTraversal(node){

        if(node===null) return

        inorderTraversal(node.left)

        //keep a track of all the node.val and freq
        count[node.val] = (count[node.val] || 0 ) +1

        //keep a track of max
        maxCount = Math.max(maxCount , count[node.val])

        inorderTraversal(node.right)

    }

    inorderTraversal(root)
    console.log(count)

    for(let k in count){
        if(count[k] === maxCount)
            modes.push(parseInt(k))
    }



    return modes

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
let treeArray = [1, null, 2, 2];
let root = createTreeFromArray(treeArray);

console.log("Modes of the BST:", findMode(root)); // Should print [2]
