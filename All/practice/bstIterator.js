var BSTIterator = function(root) {
    let stack  = []
    let current=root
    while(current){
        stack.push(current)
        current = current.left
    }
    this.stack=stack
};

BSTIterator.prototype.next = function() {
    let node = this.stack.pop()
    let current  = node.right
    while(current){
        this.stack.push(current)
        current = current.left
    }
    return node
};

BSTIterator.prototype.hasNext = function() {
    return this.stack.length>0 //true/false
};