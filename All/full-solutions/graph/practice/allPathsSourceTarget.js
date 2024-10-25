function allPathsSourceTarget(graph) {
    const target = graph.length-1

    let result = []
    let path = []
    function dfs(node){

        //add
        path.push(node)
        //base case
        if(node===target){
            result.push([...path])
        }
        //explore
        for(const nei of graph[node]){
            dfs(nei)
        }

        //pop
        path.pop();
    }

    dfs(0)
    return result
}

// Sample input
const graph = [[1, 2], [3], [3], []];

// Function call to test your code
const result = allPathsSourceTarget(graph);
console.log(result);  // Should print [[0, 1, 3], [0, 2, 3]] if your implementation is correct
