function rangeSum(root, low, high){

    // low <= root.val <= high

    if(root === null) return 0
    let sum = 0

    if(low <= root.val && root.val<=high) sum+= root.val
    if(low<root.val) sum+= rangeSum(root.left, low,high )
    if(root.val<high) sum+=rangeSum(root.right, low, high)
    return sum

}