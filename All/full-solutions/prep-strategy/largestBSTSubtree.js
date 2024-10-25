var largestBSTSubtree = function(root) {

    //what is the purpose of this function ? to find the largest BST in the tree
    //what is the base case ? if the node is null return [true, 0, Infinity, -Infinity]
    //what is the recursive case ? we call the helper function on the left and right child of the node
    //what is the return value ? an array of 4 elements [boolean, size, min, max]
    //what is the time complexity ? O(N) where N is the number of nodes in the tree
    //what is the space complexity ? O(H) where H is the height of the tree
    function helper(node) {
        if (!node) return [true, 0, Infinity, -Infinity]

        let [leftIsBST, leftSize, leftMin, leftMax] = helper(node.left)
        let [rightIsBST, rightSize, rightMin, rightMax] = helper(node.right)

        let isBST = leftIsBST && rightIsBST && node.val > leftMax && node.val < rightMin
        let size = isBST ? leftSize + rightSize + 1 : Math.max(leftSize, rightSize)
        let min = isBST ? Math.min(leftMin, node.val) : -Infinity
        let max = isBST ? Math.max(rightMax, node.val) : Infinity

        return [isBST, size, min, max]
    }

    return helper(root)[1]

};