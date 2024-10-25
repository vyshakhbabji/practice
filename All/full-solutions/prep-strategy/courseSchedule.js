function canFinish(numCourses, prerequisites) {
    let premap = Array(numCourses).fill().map(()=>[])
    for(let [crs,pre] of prerequisites){
        premap[crs].push(pre)
    }
    let cycle = new Set()

    function dfs(node){
        if(cycle.has(node)) return false
        if(premap[node].length===0) return true
        cycle.add(node)
        for(let pre of premap[node]){
            let res= dfs(pre)
            if(res === false) return false
        }
        cycle.delete(node)
        premap[node]=[]
        return true
    }
    for(let i = 0 ; i<numCourses ; i++){
        let res = dfs(i)
        if(res === false) return false
    }
    return true
}

// Sample input
const numCourses = 3;
const prerequisites = [[1,0],[1,2]]; //true
const result = canFinish(numCourses, prerequisites);
console.log(result);  // Should print true if your implementation is correct
