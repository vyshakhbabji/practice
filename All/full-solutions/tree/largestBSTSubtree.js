var largestBSTSubtree = function(root) {

    // Check if a subtree rooted at `node` is a BST with values within (min, max)
    function isBST(node, min, max) {
        if (node === null) return true;
        if (node.val <= min || node.val >= max) return false;
        return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
    }

    // Compute the size of a subtree rooted at `node`
    function size(node) {
        if (node === null) return 0;
        return 1 + size(node.left) + size(node.right);
    }

    // Helper function to find the size of the largest BST subtree
    function helper(node) {
        if (node === null) return 0;

        // Check if the subtree rooted at `node` is a valid BST
        if (isBST(node, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)) {
            // If it is a BST, return its size
            return size(node);
        }

        // If not, recursively find the largest BST size in the left and right subtrees
        return Math.max(helper(node.left), helper(node.right));
    }

    return helper(root);

};

//given is bt
//find the largest bst subtree = that means
// 1. i need to check if subtree is bst or not
//2 . if yes then find the size of the subtree
//3. if no then check for left and right child
//4. if both are bst then return the size of the subtree
//5. if not then return the max of left and right child
//6. if left is not bst then check for right child and vice versa

//so can this problem be broken down in to subproblems? yes
//subproblem 1: check if subtree is bst or not
//subproblem 2: find the size of the subtree
//subproblem 3: find the max of left and right child

