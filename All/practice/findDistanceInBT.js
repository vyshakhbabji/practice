var findDistance = function(root, p, q) {

    function lca(node,p,q){
        if(node===null||p===node.val||q===node.val) return node
        let left = lca(node.left,p,q)
        let right=lca(node.right,p,q)
        if(left&&right) return node
        return left||right
    }

    function distance(node,target,level){
        if(node===null) return 0
        if(node===target) return level
        return distance(node.left ,target,level+1) && distance(node.right,target,level+1)
    }

    let lcaNode= lca(root,p,q)
    let distanceP= distance(lcaNode , p , 0)
    let distanceQ= distance(lcaNode,q,0)
    return distanceQ+distanceP
};