var boundaryOfBinaryTree = function(root) {
    if (!root) return []

    let leftBoundary = []
    let rightBoundary = []
    let leaves = []

    function getLeaves(node) {
        if (!node) return

        if (!node.left && !node.right) {
            leaves.push(node.val)
            return
        }

        getLeaves(node.left)
        getLeaves(node.right)
    }

    function getLeftBoundary(node) {
        if (!node || (!node.left && !node.right)) return

        leftBoundary.push(node.val)

        if (node.left) {
            getLeftBoundary(node.left)
        } else {
            getLeftBoundary(node.right)
        }
    }

    function getRightBoundary(node) {
        if (!node || (!node.left && !node.right)) return

        rightBoundary.push(node.val)

        if (node.right) {
            getRightBoundary(node.right)
        } else {
            getRightBoundary(node.left)
        }
    }

    getLeftBoundary(root.left)
    getRightBoundary(root.right)
    getLeaves(root)

    return [root.val, ...leftBoundary, ...leaves, ...rightBoundary.reverse()]

};