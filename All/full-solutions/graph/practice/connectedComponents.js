function countComponents(n, edges) {

    let adj = Array.from({length:n}, ()=>[])
    let visited = new Set()

    for (let [u,v] of edges){
        adj[u].push(v)
        adj[v].push(u)
    }

    let count = 0

    for( i = 0 ; i < n ; i++){
        if(!visited.has(i)) {
            dfs(i)
            count++
        }
    }

    function dfs(i){
        if(visited.has(i)) return
        visited.add(i)
        for (let n of adj[i]){
            if(!visited.has(n)){
                dfs(n)
            }
        }
    }
    return count
}

// Sample input
const n = 5;
const edges = [[0, 1], [1, 2], [3, 4]];

// Expected output
const expectedOutput = 2;

// Function call to test your code
const result = countComponents(n, edges);
console.log(result);  // Should print 2 if your implementation is correct
