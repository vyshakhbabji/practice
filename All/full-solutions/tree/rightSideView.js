const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [1,2,3,null,5,null,4];

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Binary Tree:");
printTree(root);

function rightSideView(root) {

    const q  = []
    const res= []

    q.push(root)

    while(q.length > 0 ){
        let len = q.length

        for (let i= 0 ; i < len ; i++){
            let node  = q.shift()

            if(i === len-1){
                res.push(node.val)
            }

            if(node.left!=null) q.push(node.left)
            if(node.right!=null) q.push(node.right)

        }
    }

    return res

}

// Get the right side view of the tree
let rightView = rightSideView(root);

console.log("Right Side View:", rightView);

/*
Time and Space Complexity:

Time Complexity: O(N), where N is the number of nodes in the tree. We visit each node exactly once.
Space Complexity: O(W), where W is the maximum width of the tree.
In the worst case, the last level of a perfect binary tree contains N/2 nodes, so the space complexity is O(N).
 */