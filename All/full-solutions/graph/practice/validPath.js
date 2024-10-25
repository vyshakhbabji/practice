function validPath(n, edges, start, end) {
    const adj = Array.from({length:n}, ()=>[])
    for(let [u,v] of edges){
        adj[u].push(v)
        adj[v].push(u)
    }

    let visited = new Set()


    function dfs(node){
        if(node === end) return true

        if(visited.has(node)){
            return false
        }
        visited.add(node)
        for (let nei of adj[node]) {
            if (dfs(nei)) { // check if nei is not in the visited  //  check if dfs returns true
                return true; // Path found through neighbor
            }
        }

        return  false
    }

    return dfs(0)
}

// Sample input
const n = 3;
const edges = [[0,1],[1,2],[2,0]]
const start = 0;
const end = 2;

// Function call to test your code
const result = validPath(n, edges, start, end);
console.log(result);  // Should print false if your implementation is correct
