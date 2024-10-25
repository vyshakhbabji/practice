var shortestBridge = function(grid) {
    const R = grid.length;
    const C = grid[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up
    let foundFirstIsland = false

    //find the first island
    for(let r = 0; r < R; r++){
        if(foundFirstIsland) break
        for(let c = 0; c < C; c++){
            if(grid[r][c] === 1){
                dfs(r,c)
                foundFirstIsland = true
                break
            }
        }
    }

    function dfs(r,c){
        if(r<0 || r>=R || c<0 || c>=C || grid[r][c] !== 1) return
        grid[r][c] = 2
        for(let [dr,dc] of directions){
            dfs(r+dr,c+dc)
        }
    }

    //expand the first island

    let q = []
    for(let r = 0; r < R; r++){
        for(let c = 0; c < C; c++){
            if(grid[r][c] === 2){
                q.push([r,c])
            }
        }
    }

    let steps = 0
    while(q.length > 0){
        let len = q.length
        for(let i = 0; i < len; i++){
            let [r,c] = q.shift()
            for(let [dr,dc] of directions){
                let nr = r + dr
                let nc = c + dc
                if(nr<0 || nr>=R || nc<0 || nc>=C || grid[nr][nc] === 2) continue
                if(grid[nr][nc] === 1) return steps
                grid[nr][nc] = 2
                q.push([nr,nc])
            }
        }
        steps++
    }

    return steps

};