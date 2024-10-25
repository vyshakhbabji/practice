function smallestSubtreeWithDeepestNodes(root) {
    function dfs(node) {
        if (!node) return [null, 0];
        const [left, leftDepth] = dfs(node.left);
        const [right, rightDepth] = dfs(node.right);
        if (leftDepth === rightDepth) return [node, leftDepth + 1];
        return leftDepth > rightDepth ? [left, leftDepth + 1] : [right, rightDepth + 1];
    }
    return dfs(root)[0];
}

//how do i rememebr so many tree subtree problems ?
//how do i remember the approach for each problem ?
  // 1. understand the problem
    // 2. identify the base case
    // 3. identify the recursive case
    // 4. identify the return value
    // 5. identify the time complexity
    // 6. identify the space complexity

//how do i remember the approach for each problem ?
