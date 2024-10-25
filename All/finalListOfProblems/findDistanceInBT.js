//Given the root of a binary tree and two integers p and q, return the distance between the nodes of value p and value q in the tree.
//
// The distance between two nodes is the number of edges on the path from one to the other.

var findDistance = function(root, p, q) {

    //hint - has p and q value
    // so think in terms of lca
    //p and q is integaers

    function lca(node,p,q){
        if (node===null || p === node.val || q===node.val )  return node
        let left = lca(node.left , p , q )
        let right = lca(node.right , p , q)
        if(left && right ) return node
        return left||right
    }

    function distance(node, target , dist){
        if(node===null) return -1
        if(node.val === target) return dist
        let left = distance(node.left,target , dist+1)
        let right  = distance(node.right , target, dist+1)
        return Math.max(left, right)
    }

    let lcaNode = lca(root,p,q)
    let distancep = distance(lcaNode , p, 0)
    let distanceq  = distance(lcaNode , q ,0 )

    return distanceq+distancep


};
