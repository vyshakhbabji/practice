var boundaryOfBinaryTree = function(root) {
    if (!root) return [];

    let leftBoundary = [];
    let rightBoundary = [];
    let leafNodes = [];

    // Helper function to check if a node is a leaf
    function isLeaf(node) {
        return !node.left && !node.right;
    }

    // DFS function to collect left boundary nodes
    function dfsLeftBoundary(node) {
        if (!node || isLeaf(node)) return;
        leftBoundary.push(node.val);
        if (node.left) {
            dfsLeftBoundary(node.left);
        } else {
            dfsLeftBoundary(node.right);
        }
    }

    // DFS function to collect leaf nodes
    function dfsLeaves(node) {
        if (!node) return;
        if (isLeaf(node)) {
            leafNodes.push(node.val);
            return;
        }
        dfsLeaves(node.left);
        dfsLeaves(node.right);
    }

    // DFS function to collect right boundary nodes
    function dfsRightBoundary(node) {
        if (!node || isLeaf(node)) return;
        if (node.right) {
            dfsRightBoundary(node.right);
        } else {
            dfsRightBoundary(node.left);
        }
        rightBoundary.push(node.val); // Add after the recursion to reverse order
    }

    // Process the root node
    if (!isLeaf(root)) {
        leftBoundary.push(root.val);
    }

    // Collect left boundary, leaf nodes, and right boundary
    dfsLeftBoundary(root.left);
    dfsLeaves(root);
    dfsRightBoundary(root.right);

    // Combine left boundary, leaf nodes, and right boundary
    return [...leftBoundary, ...leafNodes, ...rightBoundary];
};
