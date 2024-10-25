const {createTreeFromArray, printTree} = require("./TreeUtils");

let treeArray = [1, 2, 3, 4, 5, null, 6];
let root = createTreeFromArray(treeArray);

console.log("Original Tree:");
printTree(root);


function invertTree(root){

    if(root===null) return root

    const invertedLeft = invertTree(root.left)
    const invertedRight = invertTree(root.right)

    root.left = invertedRight
    root.right = invertedLeft

    return root

}

// Invert the tree
let invertedRoot = invertTree(root);

console.log("Inverted Tree:");
printTree(invertedRoot);
