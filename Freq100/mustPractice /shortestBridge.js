var shortestBridge = function(grid) {

    let R = grid.length
    let C = grid[0].length
    let foundFirstIsland = false
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up

    for(let r = 0 ; r<R ; r++){
        for(let  c = 0 ; c< C ; c++){
            if(grid[r][c] === 1){
                dfs(r,c)
                foundFirstIsland = true
                break
            }
        }
        if(foundFirstIsland === true) break
    }

    //explore and mark all cells of found island to 2
    function dfs(r,c){
        if(r>=R || r<0 || c>=C || c<0 || grid[r][c]!=1) return
        grid[r][c]=2 // mark them visited
        for(let [dr, dc] of directions){
            let nr = dr+r , nc = dc+c
            dfs(nr,nc)
        }
    }

    let q = []
    for(let r = 0 ; r<R ; r++){
        for(let c = 0 ; c<C ;c++){
            if(grid[r][c]===2) //if already vsited ,  then push them to the q intially to buid bfs queue
                q.push([r,c ,0]) //steps is 3 param
        }
    }

    //for each cell of found island , run bfs to find shortest path
    // marked 2 is for visited
    while(q.length>0) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let [r, c, steps] = q.shift()
            for (let [dr, dc] of directions) {
                let nr = dr + r, nc = dc + c
                if (nr < 0 || nr >= R || nc < 0 || nc >= C || grid[nr][nc] === 2) continue
                if (grid[nr][nc] === 1) return steps
                grid[nr][nc] = 2
                q.push([nr, nc ,steps+1])
            }
        }
    }

    return -1

};

//time : O(n*m)