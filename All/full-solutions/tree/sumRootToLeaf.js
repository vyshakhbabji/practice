const { createTreeFromArray, printTree } = require("./TreeUtils");

// Input tree array
let treeArray = [1,2,3];

// Create the tree from the array
let root = createTreeFromArray(treeArray);

console.log("Binary Tree:");
printTree(root);

function sumNumbers(root) {

    function dfs(node,cursum){
       if(node === null ) return 0

        cursum = cursum*10+node.val

        if(node.left ===null && node.right === null)
            return  cursum


        return dfs(node.left,cursum) + dfs(node.right, cursum)


    }

    return dfs(root, 0 , )

}

// Calculate the sum of all root-to-leaf numbers
let totalSum = sumNumbers(root);

console.log("Sum of all root-to-leaf numbers:", totalSum);