var minTime = function(n, edges, hasApple) {
    //this is tree graph problem
    //question has undirected tree  with n vertices(node) with apples on some nodes
    //edge of tree is given in edges array
    //dfs as need to explore all nodes
    //return min time in sec for all apples to be collected
    //time = going and comoiing back

   if(edges ===0 || n === 0 ) return 0
   let adjList = {}
    for(let [u,v] of edges){
        if(!(u in adjList)) adjList[u]= []
        if(!(v in adjList)) adjList[v]=[]
        adjList[u].push(v)
        adjList[v].push(u)
    }

    let visited = new Set()

    //return time
    function dfs(node){
        if(visited.has(node)) return 0
        let time = 0
        visited.add(node)
        for(let nei of adjList[node]){
            time+=dfs(nei)
        }
        if(time>0 || hasApple[node]) return time+2
        else return 0
    }

    let time = dfs(0)
    if(time > 0 ) return time-2
    else return 0

};