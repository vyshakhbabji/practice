
var subtreeWithAllDeepest = function (root) {
    function dfs(node) {
        if (node === null) return { depth: 0, lca: null }
        let left = dfs(node.left)
        let right = dfs(node.right)
        if (left.depth > right.depth) {
            return { depth: left.depth + 1, lca: left.lca }
        } else if (right.depth > left.depth) {
            return { depth: right.depth + 1, lca: right.lca }
        } else {
            return { depth: left.depth + 1, lca: node }
        }
    }

    return dfs(root).lca

}


// Example usage:
const root = {
    val: 3,
    left: {
        val: 5,
        left: { val: 6, left: null, right: null },
        right: {
            val: 2,
            left: { val: 7, left: null, right: null },
            right: { val: 4, left: null, right: null }
        }
    },
    right: {
        val: 1,
        left: { val: 0, left: null, right: null },
        right: { val: 8, left: null, right: null }
    }
};

console.log(subtreeWithAllDeepest(root)); // Output: { val: 2, left: { val: 7 }, right: { val: 4 } }


//var subtreeWithAllDeepest = function(root) {
//
//     let q= []
//     q.push(root)
//     let deepest = []
//     while(q.length>0){
//         let len = q.length
//         deepest = []
//         for(let i = 0 ; i < len ; i++){
//             let node =q.shift()
//             deepest.push(node)
//             if(node.left) q.push(node.left)
//             if(node.right) q.push(node.right)
//         }
//     }
//
//     let nodeSet = new Set(deepest)
//
//     function LCA(root,nodeset){
//         if(root===null || nodeSet.has(root)) return root
//         let left = LCA(root.left , nodeset)
//         let right = LCA(root.right, nodeset)
//         if(left&& right) return root
//         return left||right
//     }
//
//     return LCA(root,nodeSet)
//
// };