function cloneGraph(node){


    let map = new Map()
    // ofType :  {node, clone}

    function dfs(node){


        if(map.has(node))
            return map.get(node)

        let clone = new Node (node.val)

        map.set(node, clone)

        //add neighbours of node to clone
        for(let nei of node){
            let neighbours  = dfs(nei)
            clone.neighbors.push(neighbours)
        }

        return clone
    }

    return dfs(node)

}