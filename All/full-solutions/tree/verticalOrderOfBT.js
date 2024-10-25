/*
Given the root of a binary tree, return the vertical order traversal of its nodes' values.
(i.e., from top to bottom, column by column).
 */

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function verticalOrder(root) {

    if(root===null) return []

    // i need horizonatal map to add/track the horizontal distance
    let hdmap = new Map()

    let q  = []
    q.push([root , 0 ])

    let min=0,max=0;

    while( q.length > 0 ){

        let [node, hd ] = q.shift()

        console.log(node.val)

        if(!hdmap.has(hd)){
            hdmap.set(hd,[])
        }
        hdmap.get(hd).push(node.val)

        min = Math.min(hd,min)
        max=Math.max(hd,max)

        if(node.left!==null) q.push([node.left,hd-1])
        if(node.right!==null) q.push([node.right,hd+1])

    }

    const res = []

    console.log(hdmap)

    for(let i=min;i<=max ; i++){
        if(hdmap.has(i)) res.push(hdmap.get(i))
    }

    return  res


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

console.log("Vertical Order Traversal of the tree:", verticalOrder(root));
