function numDistinctIslands(grid) {
    const R = grid.length
    const C = grid[0].length
    let visited = new Set()
    let distinctIslands = new Set() //this is to keep a track of distinct island
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {

            if(grid[i][j] ===1 && !visited.has(`${i},${j}`)){
                let shape = []
                 dfs(i,j , i , j , shape )
                 distinctIslands.add(JSON.stringify(shape));

            }

        }

    }
    function dfs(r,c, r0,c0 , shape){
        if(r<0 || c< 0 || r>=R|| c>=C || visited.has(`${r},${c}`) || grid[r][c] ===0) return

        visited.add(`${r},${c}`)
        shape.push([r - r0, c - c0]); // this is new as this will keep a trck of the shape of the distinct island
        dfs(r-1,c, r0,c0,shape)
        dfs(r+1,c,r0,c0,shape)
        dfs(r,c-1,r0,c0,shape)
        dfs(r,c+1,r0,c0,shape)

    }
    return distinctIslands.size
}

// Sample input
const grid = [
    [1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0]
];

// Function call to test your code
const result = numDistinctIslands(grid);
console.log(result);  // Should print 2 if your implementation is correct
