var BSTIterator = function(root) {
    this.stack = []
    let cur = root
    while(cur){
        this.stack.push(cur)
        cur = cur.left
    }
};

BSTIterator.prototype.next = function() {

    let node = this.stack.pop()
    let cur = node.right
    while(cur){
        this.stack.push(cur)
        cur =cur.left
    }

    return node.val

};


BSTIterator.prototype.hasNext = function() {

    return this.stack.length > 0

};

// Time: O(N) for initialization, O(1) for next and hasNext
// Space: O(H) where H is the height of the tree

