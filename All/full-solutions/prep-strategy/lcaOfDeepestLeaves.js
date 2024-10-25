var lcaDeepestLeaves = function(root) {
    let lca = null
    let maxDepth = 0

    function dfs(node, depth) {
        if (!node) return depth

        let left = dfs(node.left, depth + 1)
        let right = dfs(node.right, depth + 1)

        maxDepth = Math.max(maxDepth, left, right)

        if (left === maxDepth && right === maxDepth) {
            lca = node
        }

        return Math.max(left, right)
    }

    dfs(root, 0)
    return lca

};