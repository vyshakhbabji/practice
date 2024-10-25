function maxAncestorDiff(root) {
    function dfs(node, minVal, maxVal) {
        if (node === null) {
            return maxVal - minVal;
        }

        // Update the minimum and maximum values on the path
        minVal = Math.min(minVal, node.val);
        maxVal = Math.max(maxVal, node.val);

        // Recurse on the left and right children
        let leftDiff = dfs(node.left, minVal, maxVal);
        let rightDiff = dfs(node.right, minVal, maxVal);

        // Return the maximum difference found
        return Math.max(leftDiff, rightDiff);
    }

    return dfs(root, root.val, root.val);
}

// Example usage:
let root = {
    val: 8,
    left: {
        val: 3,
        left: { val: 1, left: null, right: null },
        right: {
            val: 6,
            left: { val: 4, left: null, right: null },
            right: { val: 7, left: null, right: null }
        }
    },
    right: {
        val: 10,
        left: null,
        right: {
            val: 14,
            left: { val: 13, left: null, right: null },
            right: null
        }
    }
};

console.log(maxAncestorDiff(root)); // Output: 7
