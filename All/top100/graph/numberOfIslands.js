function numIslands(grid) {
    let R = grid.length
    let C = grid[0].length

    let visited = new Set()     // `${r}-${c}`
    let count = 0
    for(let r = 0 ; r<R ; r++){
        for (let c = 0; c < C; c++) {
            if(!visited.has(`${r}-${c}`) && grid[r][c]==="1"){
                count+=dfs(r,c)
            }
        }
    }


    function dfs(r,c){
        if(r<0 || r>=R || c<0 || c>=C || grid[r][c] === "0" || visited.has(`${r}-${c}`)){
            return 0
        }

        visited.add(`${r}-${c}`)

        dfs(r+1, c )
        dfs(r,c+1)
        dfs(r-1,c)
        dfs(r,c-1)

        return 1

    }

    return count
}

//time complexity : O(R*C)