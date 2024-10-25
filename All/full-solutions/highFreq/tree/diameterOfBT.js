//find height
//max height of left and right
//node+left+right
//diameter  = max(dia , left+right)

function diameterOfBinaryTree(root){

    let maxDiameter  = 0
    function height(root){
        if(root===null) return 0

        let leftHeight = 1+ height(root.left)
        let rightHeight = 1+height(root.right)
        maxDiameter=Math.max(maxDiameter , leftHeight+rightHeight)
        return Math.max(leftHeight,rightHeight)

    }

    height(root)
    return maxDiameter
}

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
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
let treeArray = [1, 2, 3, 4, 5];
let root = createTreeFromArray(treeArray);

console.log("Diameter of the tree:", diameterOfBinaryTree(root));
