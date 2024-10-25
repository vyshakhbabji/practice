var lowestCommonAncestor = function(root, p, q) {
    
    function dfs(node,p,q){
        if(node===null || p ===node || q === node ) return node 
        let left = dfs(node.left, p ,q)
        let right = dfs(node.right, p , q)
        if(left&&right) return node 
        return left || right 
    }

    return dfs(root,p,q)
};

// Time complexity : O(n)  where n is the number of nodes in the tree
// Space complexity : O(h) , recursion stack , worst case O(n) ,  best case of balanced tree  O(logn)


// for space and time complexity using stack


function LCAIterative(root,p , q){
    let stack = [root];
    let parentMap = new Map();  // To store parent pointers for each node
    parentMap.set(root, null);

    // While both p and q's parents are not found
    while (!parentMap.has(p) || !parentMap.has(q)) {
        let node = stack.pop();
        
        if (node.left) {
            parentMap.set(node.left, node);
            stack.push(node.left);
        }
        if (node.right) {
            parentMap.set(node.right, node);
            stack.push(node.right);
        }
    }

    // Collect ancestors of p
    let ancestors = new Set();
    while (p !== null) {
        ancestors.add(p);
        p = parentMap.get(p);
    }

    // Move q upwards until we find a common ancestor
    while (!ancestors.has(q)) {
        q = parentMap.get(q);
    }

    return q;
}