var findDistance = function(root, p, q) {

    function lca(node, p, q) {
        if (!node) return null
        if (node === p || node === q) return node

        let left = lca(node.left, p, q)
        let right = lca(node.right, p, q)

        if (left && right) return node
        return left || right
    }

    function distance(node, target, depth) {
        if (!node) return -1
        if (node === target) return depth

        let left = distance(node.left, target, depth + 1)
        let right = distance(node.right, target, depth + 1)

        return Math.max(left, right)
    }

    let lcaNode = lca(root, p, q)
    let left = distance(lcaNode, p, 0)
    let right = distance(lcaNode, q, 0)

    return left + right

};