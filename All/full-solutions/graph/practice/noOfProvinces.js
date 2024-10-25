function findCircleNum(isConnected) {
    let R= C = isConnected.length
    let count = 0
    let visited = new Set()

    let adjList =  Array.from({length:R},()=>[])
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if(isConnected[i][j]===1 && i!=j){
                adjList[i].push(j)
            }
        }
    }

    for (let i=0;i<R; i++){
        if(!visited.has(i)){
            dfs(i)
            count++
        }
    }

    function dfs(node){
        visited.add(node)
        for(let nei of adjList[node]){
            if(!visited.has(nei))
                dfs(nei)
        }
    }

    return count
}

// Sample input
// const isConnected = [
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1]
// ];

const isConnected = [[1,0,0,1],
    [0,1,1,0],
    [0,1,1,1],
    [1,0,1,1]]

// Function call to test your code
const result = findCircleNum(isConnected);
console.log(result);  // Should print 2 if your implementation is correct
