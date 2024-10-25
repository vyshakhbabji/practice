function getTargetCopy(original, cloned, target) {
    if (original === null) return null;

    // If the current node in the original tree matches the target, return the cloned node
    if (original === target) return cloned;

    // Traverse the left subtree
    let result = getTargetCopy(original.left, cloned.left, target);
    if (result !== null) return result;

    // Traverse the right subtree
    return getTargetCopy(original.right, cloned.right, target);
}

// Example usage:
const original = {
    val: 7,
    left: { val: 4, left: null, right: null },
    right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 19, left: null, right: null }
    }
};

const cloned = {
    val: 7,
    left: { val: 4, left: null, right: null },
    right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 19, left: null, right: null }
    }
};

const target = original.right; // Node with value 3
console.log(getTargetCopy(original, cloned, target)); // Output: Corresponding node with value 3 in cloned tree
