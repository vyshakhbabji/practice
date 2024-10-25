class TreeNode {
    constructor(val = 0, left = null, right = null, parent = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

function lowestCommonAncestor(p, q) {


    // visited is the set fpr keeping track of the path of p to its parent
    //this keeps a track of ancestors of p
    let visited  = new Set()

    //add all the ancestors of p by traversing p to its ancestors
    while(p!=null){
        visited.add(p)
        p = p.parent
    }

    //if when traversing ancesors of q , any first ancestor is common , thats the LCA of P and Q
    while(q!=null){
        if(visited.has(q))
            return q
        q = q.parent
    }

    return null



}

// Helper function to create a tree from an array representation with parent pointers
function createTreeFromArray(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let currentNode = queue.shift();

        if (arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]);
            currentNode.left.parent = currentNode;
            queue.push(currentNode.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]);
            currentNode.right.parent = currentNode;
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

console.log("LCA of 5 and 1:", lowestCommonAncestor(p, q).val);

p = findNode(root, 5);
q = findNode(root, 4);

console.log("LCA of 5 and 4:", lowestCommonAncestor(p, q).val);
