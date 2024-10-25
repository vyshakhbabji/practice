const { TreeNode, createTreeFromArray, printTree } = require('./TreeUtils');

let treeArray = [1, 2, 3, 4, 5, null, 6];
let root = createTreeFromArray(treeArray);

console.log("Original Tree:");
printTree(root);

function levelOrderTraversal (root){

    let q  = []
    if(root === null) return null

    q.push(root)

    let depth = 0

    const res = []
    let levels = 0

    while(q.length>0){
        const len  = q.length

        for(let i = 0 ; i < len ; i++){
            let node = q.shift()
            res.push(node.val)
            if(node.left!=null){
                q.push(node.left)
            }
            if(node.right!=null){
                q.push(node.right)
            }


        }

        levels++

    }

    return { nodes: res, levels: levels };

}

console.log("Max Depth of the Tree:", levelOrderTraversal(root));
