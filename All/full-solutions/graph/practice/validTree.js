function validTree(n, edges) {
    let adj  =  Array.from({length:n}, ()=>[])
    for(let[u,v] of edges ){
        adj[u].push(v)
        adj[v].push(u)
    }

    let cycle = new Set()

    // this is imp line as this determines if all nodes connected and no cycles
    if(!dfs(0,-1)) return false

    function dfs(node,parent){

        if(cycle.has(node)) return false
        cycle.add(node)

        for(let nei of adj[node]){
            if(nei === parent ) continue
            let res = dfs(nei,node)
            if(res === false) return false
        }

        return true

    }

    return cycle.size === n
}
// Sample input
const n = 5;
const edges = [[0, 1], [0, 2], [0, 3], [1, 4]];

// Expected output
const expectedOutput = true;

// Function call to test your code
const result = validTree(n, edges);
console.log(result);  // Should print true if your implementation is correct
