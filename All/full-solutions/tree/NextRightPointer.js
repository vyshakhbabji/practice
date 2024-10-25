class TreeNode {
    constructor(val = 0, left = null, right = null, next = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

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

function printTreeWithNext(root) {
    let level = 0;
    let current = root;
    while (current !== null) {
        let levelNodes = [];
        let node = current;
        while (node !== null) {
            levelNodes.push(node.val + "->" + (node.next ? node.next.val : "null"));
            node = node.next;
        }
        console.log("Level " + level + ": " + levelNodes.join(", "));
        level++;
        current = current.left;
    }
}
function connect(root) {

    const q = []
    const res  = []
    q.push(root)

    while(q.length>0){
        let len = q.length
        for (let i = 0 ; i< len ; i++){

            let node  = q.shift()

            if(i<len-1){
                node.next = q[0]
            }

            if(node.left!=null)
                q.push(node.left)
            if(node.right!=null)
                q.push(node.right)

        }
    }
    return root
}


// Example usage:
let treeArray = [1, 2, 3, 4, 5, 6, 7];
let root = createTreeFromArray(treeArray);

console.log("Original Tree with Next Pointers:");
printTreeWithNext(root);

let connectedRoot = connect(root);

console.log("Tree with Next Pointers After Connecting:");
printTreeWithNext(connectedRoot);