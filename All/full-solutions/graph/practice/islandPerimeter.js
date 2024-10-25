function islandPerimeter(grid) {
    // Implement your solution here

    const R  =  grid.length
    const C = grid[0].length

    let visited = new Set()
    let perimeter=0
    for(let i = 0 ; i<R ; i++){
        for(let j =0; j<C;j++){
            if(grid[i][j]!==0  && !visited.has(`${i},${j}`)){
                perimeter=dfs(i,j)
            }
        }
    }

    function dfs(r,c){
        if(r<0 || r>=R ||c<0||c>=C || grid[r][c] !== 1 ){
            return 1
        }

        // This is the island part which is inside the island grid which is already visited , so return 0
        // IMP : This is the base case for the recursion
        if( visited.has(`${r},${c}`))
            return  0

        let perimeter = 0

        visited.add(`${r},${c}`)
        console.log(visited)
        perimeter= dfs(r+1, c)
        perimeter+=dfs(r,c+1)
        perimeter+=dfs(r-1,c)
        perimeter+=dfs(r,c-1)


        return perimeter
    }

    return perimeter

}

// Sample input
const grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];

// Expected output
const expectedOutput = 16;

// Function call to test your code
const result = islandPerimeter(grid);
console.log(result);  // Should print 16 if your implementation is correct
