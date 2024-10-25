var cloneGraph = function(node) {
    if(node===null) return null
    let map = new Map()
    function dfs(node){
        if(map.has(node))return map.get(node)
        let clone = new Node(node.val)
        map.set(node,clone)
        for(let nei of node.neighbors){
            let neigh = dfs(nei)
            clone.neighbors.push(neigh)
        }
        return clone 
    }
    return dfs(node)
};

Conclusion:
Time complexity: O(n + e), where n is the number of nodes and e is the number of edges in the graph.
Space complexity: O(n + e), as you need space for the cloned graph, the map, and the recursive call stack.