function canFinish(numCourses, prerequisites) {
     //num courses is just number of nodes
    let premap = Array.from({length:numCourses},()=>[])
    for(let [crs,prereq] of prerequisites){
        premap[crs].push(prereq)
    }

    let cycle = new Set() //this is to check if the nodes are already in the visited and to detect the cycle

    function dfs (node){  //here node is crs
        //base case

        // if the crs has been visited earlier that means there is a cycle .
        //we remove the course once visited and assign it to empty if dfs on pre-req passes
        if(cycle.has(node)) return false

        // there are no pre-requiste for this crs
        if(!premap[node].length) return true

        //add to visit as we are visiting this crs and running dfs for thier prereq
        cycle.add(node)

        for(let pre of premap[node] ){ //iterate over each prereq of node from premap
            let res = dfs(pre)
            // if the dfs on pre-req returns false u can safely return false as we detected cycle
            if(res === false ) return false
        }
        //remove the crs from visited
        cycle.delete(node)
        premap[node] = []
        return true
    }

    //iterate over all crs and see if thy have cycle , if yes then return false immediatly
    for(let i = 0 ; i < numCourses; i++){
        let res = dfs(i)
        if (res === false) return false
    }

    return true


}

// Sample input
const numCourses = 3;
const prerequisites = [[1,0],[1,2]];

// Expected output
const expectedOutput = true;

// Function call to test your code
const result = canFinish(numCourses, prerequisites);
console.log(result);  // Should print true if your implementation is correct
