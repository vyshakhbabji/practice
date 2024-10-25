var lcaDeepestLeaves = function(root) {

    //depth needed to keep track of the max depth ie height of the tree
    //lca is the node that is the lowest common ancestor of the deepest leaves

    let lca = null
    let maxDepth = 0


    // whats level ? level is the height of the tree
    // dfs returns the depth of the node or level? level
    // max level is the depth of the tree ? yes
    // what is the purpose of this function ? to find the depth of the tree
    // what is the base case ? if the node is null return the level
    // what is the recursive case ?  we call dfs on the left and right child of the node with an increased level by 1
    // what is the return value ? the max of the left and right level
    // what is the time complexity ? O(N) where N is the number of nodes in the tree
    // what is the space complexity ? O(H) where H is the height of the tree
    function dfs(node, depth) {
        if (!node) return depth

        let left = dfs(node.left, depth + 1)
        let right = dfs(node.right, depth + 1)

        //why are we doing this ? because we need to find the deepest leaves
        //how do we find the deepest leaves ? we start at the root node and traverse the tree
        //we keep track of the depth and the lca
        //we then traverse the tree again starting at the lca to find the deepest leaves
        maxDepth = Math.max(maxDepth, left, right)

        //why are we doing this ? because we need to find the lca of the deepest leaves
        //how do we find the lca of the deepest leaves ? we start at the root node and traverse the tree
        //we keep track of the depth and the lca
        //we then traverse the tree again starting at the lca to find the deepest leaves
        if (left === maxDepth && right === maxDepth) {
            lca = node
        }

        return Math.max(left, right)
    }

    dfs(root, 0)
    return lca
};