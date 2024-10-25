function minTimeToCollectApples(n, edges, hasApple){

    let adj = new Array(n).fill(0).map(()=>[])
    for(let [u,v] of edges){
        adj[u].push(v)
        adj[v].push(u)
    }

    function dfs(node,parent){
        let time = 0
        //traverse the list
        for (let child of adj[node]){
            if(child === parent ) continue
            let childTime = dfs(child,node)
            if(childTime>0||hasApple[child]){
                time+=childTime+2
            }
        }
        return time
    }
    return dfs(0,-1)
}

// time complexity is O(n) where n is the number of nodes in the tree .. we are visiting each node once
// space complexity is O(n) where n is the number of nodes in the tree .. we are storing the adjecency list


let n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]

console.log(minTimeToCollectApples(n , edges, hasApple))