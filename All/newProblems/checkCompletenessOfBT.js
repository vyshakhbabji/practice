var isCompleteTree = function(root) {

    //level order traversal
    //if we encounter a null node - then all the nodes after this should be null
    //if we encounter a non null node after null node - then return false
    //if we reach end of tree - return true

    let q = []
    q.push(root)

    let isNodeNull = false

    while(q.length>0){
        let node = q.shift()

        if(node === null) {
            isNodeNull = true
        }
        else{
            if(isNodeNull===true ) return false
            q.push(node.left)
            q.push(node.right)
        }
    }

    return true
};