const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [-10, 9, 20, null, null, 15, 7];

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Binary Tree:");
printTree(root);

function maxPathSum(root) {

    let maxsum = 0

    function  dfs(node){
        //if node is null return 0
        if(node === null ) return 0

        //calculate leftsum - max of left and 0
        const leftsum = Math.max(dfs(node.left), 0 )

        //calculate rightsum  -max of right and 0
        const rightsum = Math.max(dfs(node.right),0)

        //path sum is node.val + right + left
        pathsum = node.val+ leftsum + rightsum

        //max sum is max between pathsum and exisiting max sum
        maxsum = Math.max(maxsum,pathsum)

        // for max sum , u need to choose the max of left and right and add it to the ndoe.val
        return node.val + Math.max(leftsum,rightsum)

    }

    dfs(root)

    return maxsum


}

// Calculate the maximum path sum
let maxSum = maxPathSum(root);

console.log("Maximum Path Sum:", maxSum);