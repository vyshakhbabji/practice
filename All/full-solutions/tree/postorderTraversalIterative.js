const { TreeNode, createTreeFromArray, printTree } = require('./TreeUtils');

let treeArray = [1, 2, 3, 4, 5, null, 6];
let root = createTreeFromArray(treeArray);

console.log("Original Tree:");
printTree(root);

function postorderTraversalTwoStacks(root) {

    const res= []
    if(root===null) return res

    const stack1 = []
    const stack2 = []

    stack1.push(root)

    while(stack1.length>0 ){
        //left , right . root

        const node = stack1.pop()
        stack2.push(node)

        if(node.left!==null) stack1.push(node.left)
        if(node.right!==null) stack1.push(node.right)


    }

    while(stack2.length>0){
        const node = stack2.pop()
        res.push(node.val)
    }

    return res
}

const postorderResult = postorderTraversalTwoStacks(root);
console.log("Post-Order Traversal:", postorderResult);
