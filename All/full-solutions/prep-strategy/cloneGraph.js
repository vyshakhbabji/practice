function cloneGraph(node){
    let map = new Map()
    if(node===null) return null
    function dfs(node){
        if(map.has(node)) return map.get(node)
        let clone = new Node(node.val)
        map.set(node,clone)
        for(let nei of node.neighbors){
            let neighbours = dfs(nei)
            clone.neighbors.push(neighbours)
        }
        return clone
    }
    return dfs(node)
}