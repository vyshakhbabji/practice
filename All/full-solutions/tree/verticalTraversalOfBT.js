class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function verticalTraversal(root) {
    if (root === null) return [];

    let q = [];
    let hdmap = new Map();

    q.push([root, 0, 0]);

    let max = 0, min = 0;

    while (q.length > 0) {
        let [node, hd, depth] = q.shift();

        if (!hdmap.has(hd)) {
            hdmap.set(hd, []);
        }
        hdmap.get(hd).push([depth, node.val]);

        max = Math.max(max, hd);
        min = Math.min(min, hd);

        if (node.left !== null) q.push([node.left, hd - 1, depth + 1]);
        if (node.right !== null) q.push([node.right, hd + 1, depth + 1]);
    }

    const res = [];

    for (let i = min; i <=max ; i++) {

        if(hdmap.has(i)){
            let col = hdmap.get(i)

            col.sort((a,b)=>{

                //sort by depth
                if(a[0]!== b[0]) return a[0]-b[0]

                //if depths are same ,  sort by values
                return a[1]-b[1]
            })


            let values = []
            for( [depth,val] of col ){

                values.push(val)
            }

            res.push(values)
        }
    }

    return res;



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
let treeArray = [1, 2, 3, 4, 6, 5, 7];
let root = createTreeFromArray(treeArray);

console.log("Vertical Order Traversal of the tree:", verticalTraversal(root));
