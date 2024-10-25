const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [3,9,20,null,null,15,7];

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Binary Tree:");
printTree(root);

function zigzagLevelOrder(root) {


    let res = []

    if(root === null) return res

    const q = []
    let leftToRight = true
    q.push(root)
    while(q.length>0){
        let len =q.length
        let cur = []
        for(let i = 0 ; i < len ; i ++){

            let node = q.shift()

            if(leftToRight){
                cur.push(node.val)
            }
            else{
                cur.unshift(node.val)
            }

            if(node.left!=null) q.push(node.left)
            if(node.right!=null) q.push(node.right)

        }

        res.push(cur)
        leftToRight =!leftToRight
    }


    return res
}

// Perform zigzag level order traversal
let traversalResult = zigzagLevelOrder(root);

console.log("Zigzag Level Order Traversal:", traversalResult);