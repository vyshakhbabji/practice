var validateBST = function(root) {

    function isBST(node, low, high){
        if(node===null) return true
        if(node.val<=low || node.val>=high) return false
        return isBST(node.left,low,node.val) && isBST(node.right,node.val,high)
    }

    let low = Number.MIN_SAFE_INTEGER
    let high = Number.MAX_SAFE_INTEGER

    return isBST(root,low,high)
}