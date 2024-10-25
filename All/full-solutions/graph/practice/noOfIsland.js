function numIslands(grid) {
    // Implement your solution here
    const R  = grid.length
    const C  = grid[0].length

    let dir = [[1,0],[0,1], [0,-1], [-1,0]]

    let visited = new Set()
    let count = 0

    for (let i = 0; i<R ; i++){
        for (let j = 0; j < C ; j++){
            if(!visited.has(`${i},${j}`) && grid[i][j] === '1'){
                dfs(i,j)
                count++
            }
        }
    }


    function dfs(r,c){
        if(visited.has(`${r},${c}`)
            || r<0 || r>=R || c<0 || c>=C || grid[r][c] === '0'
        ) return
        visited.add(`${r},${c}`)
        if(grid[r][c] === '1' ) {
            dfs(r+1, c)
            dfs(r,c+1)
            dfs(r-1,c)
            dfs(r,c-1)
        }
    }
    return count
}

// Sample input
const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

// Expected output
const expectedOutput = 3;

// Function call to test your code
const result = numIslands(grid);
console.log(result);  // Should print 3 if your implementation is correct
