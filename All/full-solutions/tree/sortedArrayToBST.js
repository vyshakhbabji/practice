function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    function buildBST(left, right) {
        if (left > right) return null;

        // Find the middle element to be the root
        let mid = Math.floor((left + right) / 2);
        let root = new TreeNode(nums[mid]);

        // Recursively build the left and right subtrees
        root.left = buildBST(left, mid - 1);
        root.right = buildBST(mid + 1, right);

        return root;
    }

    return buildBST(0, nums.length - 1);
}

// Helper function to print the tree (optional)
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Example usage:
let nums = [-10,-3,0,5,9];
let bst = sortedArrayToBST(nums);
console.log(JSON.stringify(bst));
