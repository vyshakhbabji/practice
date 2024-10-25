function distanceKinBT( root , target ,k ){

    const ans = []

    function dfs(node){
        if(!node) return -1
        if(node === target){
            subtree(node,0) // if target is found, find all nodes at distance k from target
            return 1
        }

        const left = dfs(node.left)  // check left subtree
        const right = dfs(node.right) // check right subtree

        // if target is found in left subtree, find all nodes at distance k from target in right subtree
        //why do we need to check right subtree if target is found in left subtree?
        //because the nodes at distance k from target in right subtree will be at distance k-1 from the target node
        if(left!=-1){
            if(left === k) ans.push(node.val)
            subtree(node.right, left+1)
            return left+1
        }

        // if target is found in right subtree, find all nodes at distance k from target in left subtree
        //why do we need to check left subtree if target is found in right subtree?
        //because the nodes at distance k from target in left subtree will be at distance k-1 from the target node
        if(right!=-1){
            if(right === k) ans.push(node.val)
            subtree(node.left, right+1)
            return right+1
        }

        return -1
    }

    //subtree function to find all nodes at distance k from the target node
    function subtree(node, dist){
        if(!node) return
        if(dist === k) ans.push(node.val)
        subtree(node.left, dist+1)
        subtree(node.right, dist+1)
    }

    dfs(root)

    return ans
}