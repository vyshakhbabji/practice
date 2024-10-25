function numberOfIsland(grid){

    let R = grid.length
    let C = grid[0].length


    let visited = new Set()

    let count = 0
    for(let r = 0 ; r < R ; r++){
        for(let c = 0 ; c<C ; c++){
            if(grid[r][c]==="1"  && !visited.has(`${r},${c}`))
                count+= dfs(r,c)
        }
    }


    function dfs(r,c){
        if (r < 0 || r >= R || c < 0 || c >= C || visited.has(`${r},${c}`) || grid[r][c] === "0") {

            return 0
        }

        visited.add(`${r},${c}`)

        dfs(r+1,c)
        dfs(r-1,c)
        dfs(r,c+1)
        dfs(r,c-1)

        return 1

    }


    return count

}