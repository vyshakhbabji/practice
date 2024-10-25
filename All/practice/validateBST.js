var validateBST = function(root) {

    function isBSTValid(root, low,high){
        if(root===null) return true
        if(low>=root.val || high<=root.val) return false
        return isBSTValid(root.left,low,root.val) && isBSTValid(root.right,root.val,high)
    }


    let low  = Number.MIN_SAFE_INTEGER
    let high = Number.MAX_SAFE_INTEGER
    return isBSTValid(root,low,high)
}