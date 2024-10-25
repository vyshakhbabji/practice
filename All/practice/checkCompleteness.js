var isCompleteTree = function(root) {
    let q =[]
    q.push(root)
    let isNodeNull = false
    while(q.length>0){
        let node = q.shift()
        if(node===null) {
            isNodeNull = true
        }
       else {
            if (isNodeNull) return false
            q.push(node.left)
            q.push(node.right)
        }
    }
    return true
};