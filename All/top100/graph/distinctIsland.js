var numDistinctIslands = function(grid) {
    let R = grid.length
    let C = grid[0].length
    let visited = new Set()
    let distinctIsland = new Set()
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {

            if(grid[r][c]===1 && !visited.has(`${r}-${c}`)){
                let shape = []
                dfs(r,c,r,c ,shape)
                distinctIsland.add(JSON.stringify(shape))
            }
        }
    }

    function dfs(r,c,r0,c0,shape){
        if(r<0 || r>=R || c<0 || c>=C || grid[r][c] === 0 || visited.has(`${r}-${c}`)){
            return
        }
        visited.add(`${r}-${c}`)
        shape.push([r-r0 , c-c0])
        dfs(r+1,c,r0,c0,shape)
        dfs(r,c+1,r0,c0,shape)
        dfs(r-1,c,r0,c0,shape)
        dfs(r,c-1,r0,c0,shape)
    }


    return distinctIsland.size
}

//time complexity : O(R*C)