//Topological sort - Course Schedule 2

function findOrder(numCourses, prerequisites) {
    // Implement your solution here
    let premap = Array.from({length:numCourses},()=>[])

    //for each crs push pre-req as array
    for (let[crs,pre] of prerequisites){
        premap[crs].push(pre)
    }

    //for this , u need to detect cycle using cycle and visited to check if the node is processed
    let cycle  = new Set()

    //acts like a process checker
    let visited = new Set()


    let res = []

    function dfs (node){

        //if cycle detected return false
        if(cycle.has(node)){
            return  false
        }

        //if visited just return true
        if (visited.has(node))
            return true

        cycle.add(node)
        visited.add(node)

        //check all pre-req and run dfs
        for (let nei of premap[node]){
            let res  = dfs(nei)
            if (res === false) return false
        }
        cycle.delete(node)
        res.push(node)
        return true
    }

    for(let i = 0 ; i<numCourses ; i++){
        let res = dfs(i)
        if(res === false) return [] //if cycle detected return enpty
    }

    return res
}

// Sample input
const numCourses = 4;
const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 1]];

// Expected output
const expectedOutput = [0, 1, 2, 3];  // One possible valid output

// Function call to test your code
const result = findOrder(numCourses, prerequisites);
console.log(result);  // Should print a valid order if your implementation is correct
