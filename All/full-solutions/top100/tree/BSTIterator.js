class BSTIterator {
    constructor(root) {
        this.stack = [];
        this._leftmostInorder(root);
    }

    // Helper function to push all the leftmost nodes to the stack.
    _leftmostInorder(node) {
        while (node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }

    next() {
        // The next smallest element is at the top of the stack.
        let topmostNode = this.stack.pop();

        // If the node has a right child, we push all the leftmost nodes
        // of the right subtree to the stack.
        if (topmostNode.right !== null) {
            this._leftmostInorder(topmostNode.right);
        }

        return topmostNode.val;
    }

    hasNext() {
        // If the stack is not empty, then there are still elements to process.
        return this.stack.length > 0;
    }
}
