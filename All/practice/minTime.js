var minTime = function(n, edges, hasApple) {

    //steps : create adjList map
    //go over each node and calculate time taken to collect apples
    //return time
    if(edges.length ===0 || n ===0 ) return 0
    let adjList = {}
    for(let [u,v] of edges){
        if(!adjList[u])adjList[u]=[]
        if(!adjList[v])adjList[v]=[]
        adjList[u].push(v)
        adjList[v].push(u)
    }


    let visited = new Set()
    let time = dfs(0)
    function dfs(node){
        if(visited.has(node)) return 0
        visited.add(node)
        let time = 0
        for(let nei of adjList[node]){
            time+=dfs(nei)
        }
        if(hasApple[node] || time>0) return time+=2
        else return 0
    }

    return time>0?time-2:0
};