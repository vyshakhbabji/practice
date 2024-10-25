const { TreeNode, createTreeFromArray, printTree } = require('./TreeUtils');

let treeArray1 = [1, 3, 2, 5];
let treeArray2 = [2, 1, 3, null, 4, null, 7];

let root1 = createTreeFromArray(treeArray1);
let root2 = createTreeFromArray(treeArray2);

console.log("Tree 1:");
printTree(root1);
console.log("Tree 2:");
printTree(root2);

function mergeTreesIterative(t1, t2) {
    if(t1===null) return t2
    if(t2===null) return  t1

    let  q = []

    q.push([t1, t2]) // push array of nodes

    while(q.length>0){
        const [node1, node2 ] = q.shift()

        if(node1===null || node2 === null) continue

        node1.val += node2.val


        //check if ndoe1.left is null , if yes , replace it with node 2 left
        if(node1.left===null){
            node1.left = node2.left
        }else{
            //push node1 and node 2 lefts to queuie
            q.push([node1.left,node2.left])
        }

        //check if node1.right is null if yes replace with node2.right
        if(node1.right===null){
            node1.right = node2.right
        }else{
            q.push([node1.right,node2.right])
        }

    }

    return  t1
}
//
// function mergeTreesUsingStacks(t1, t2) {
//    if(t1===null) return t2
//     if(t2===null) return  t1
//
//     let  q = []
//
//     q.push([t1, t2]) // push array of nodes
//
//     while(q.length>0){
//         const [node1, node2 ] = q.shift()
//
//         if(node1===null || node2 === null) continue
//
//         node1.val += node2.val
//
//
//         //check if ndoe1.left is null , if yes , replace it with node 2 left
//         if(node1.left===null){
//             node1.left = node2.left
//         }else{
//             //push node1 and node 2 lefts to queuie
//             q.push[node1.left,node2.left]
//         }
//
//         //check if node1.right is null if yes replace with node2.right
//         if(node1.right===null){
//             node1.right = node2.right
//         }else{
//             q.push[node1.right,node2.right]
//         }
//
//     }
//
//     return  t1
// }

let mergedRootIterative = mergeTreesIterative(root1, root2);
console.log("Merged Tree (Iterative):");
printTree(mergedRootIterative);

root1 = createTreeFromArray(treeArray1);
root2 = createTreeFromArray(treeArray2);

// let mergedRootStacks = mergeTreesUsingStacks(root1, root2);
// console.log("Merged Tree (queue):");
// printTree(mergedRootStacks);
