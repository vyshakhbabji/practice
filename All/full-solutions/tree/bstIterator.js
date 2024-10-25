/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {

    let stack = []
    let current = root

    while(current){
        stack.push(current)
        current = current.left
    }

    this.stack = stack
};

BSTIterator.prototype.next = function() {
    let node = this.stack.pop()
    let current = node.right

    while(current){
        this.stack.push(current)
        current = current.left
    }

    return node.val
};


BSTIterator.prototype.hasNext = function() {

    return this.stack.length > 0

};

// Time: O(N) for initialization, O(1) for next and hasNext
// Space: O(H) where H is the height of the tree

