var minCameraCover = function(root) {
    let res = 0;

    const dfs = (node) => {
        if (!node) return 1; // Null nodes are considered covered.

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (left === 0 || right === 0) {
            // If either child is a strict subtree (state 0), place a camera here.
            res++;
            return 2; // This node now has a camera.
        }

        if (left === 2 || right === 2) {
            // If either child has a camera, this node is covered.
            return 1; // This node is covered without a camera.
        }

        // If both children are covered but do not have cameras,
        // this node becomes a strict subtree (state 0).
        return 0;
    };

    // If the root is not covered after the DFS traversal, place a camera at the root.
    if (dfs(root) === 0) res++;

    return res;
};
