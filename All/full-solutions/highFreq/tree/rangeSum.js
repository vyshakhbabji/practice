var rangeSumBST = function(root, low, high) {

    if(root===null) return 0
    let sum = 0

    if(low<=root.val && root.val<=high) sum+=root.val

    if(low<root,val) sum+= rangeSumBST(root.left , low ,high)
    if(high>root.val) sum+=rangeSumBST(root.right,low,high)

    return sum

};