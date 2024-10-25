class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function lowestCommonAncestor(root, p, q) {

    // for BT ,  there is no rule of where the p and q need to be placed , could be anywhere
    //Sp , if p is root or q is root or root === null return root
    if(root===null || p === root || q === root ) return root

    //recursively search left
    const left  = lowestCommonAncestor(root.left, p,q)

    //recursively search right
    const right = lowestCommonAncestor(root.right , p , q)

    // if both left and right are not null , root is LCA - Why?
    //because p and q might be found in different subtrees of current node
    if(left !== null  || right!== null ) return root


    //Otherwise return non null child
    return left!==null ? left : right

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

// Helper function to find a node by value
function findNode(root, val) {
    if (root === null) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}

// Example usage:
let treeArray = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
let root = createTreeFromArray(treeArray);

let p = findNode(root, 5);
let q = findNode(root, 1);

console.log("LCA of 5 and 1:", lowestCommonAncestor(root, p, q).val);

p = findNode(root, 5);
q = findNode(root, 4);

console.log("LCA of 5 and 4:", lowestCommonAncestor(root, p, q).val);
