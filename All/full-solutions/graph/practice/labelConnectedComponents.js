function labelConnectedComponents(grid) {
    const R = grid.length
    const C = grid[0].length
    let label = 2
    let visited = new Set()
    for(let i =0; i<R ; i ++){
        for (let j = 0; j < C; j++) {
            if(!visited.has(`${i},${j}`) && grid[i][j]===1){
                dfs(i,j,label)
                label++
            }
        }
    }

    function dfs(r,c, label){
        if(r<0 || r>=R || c<0 || c>=C || grid[r][c] === 0 || visited.has(`${r},${c}`))
            return
        visited.add(`${r},${c}`)
        grid[r][c] = label
        dfs(r, c + 1, label)
        dfs(r + 1, c, label)
        dfs(r - 1, c, label)
        dfs(r, c - 1, label)

    }
}

// Sample input
const grid = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 0]
];

// Function call to test your code
labelConnectedComponents(grid);
console.log(grid);  // Should print the labeled grid
