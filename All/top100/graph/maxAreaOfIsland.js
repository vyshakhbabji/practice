function maxAreaOfIsland(grid){
    let R = grid.length
    let C = grid[0].length
    let maxArea = 0
    let visited = new Set()
    for(let r = 0 ; r < R ; r++){
        for(let c = 0 ; c < C ; c++){
            if(grid[r][c]===1 && !visited.has(`${r}-${c}`))
            {
                let area = dfs(r, c)
                maxArea = Math.max(area, maxArea)
            }
        }
    }
    function dfs(r,c){
        if(r<0||r>=R||c<0||c>=C||grid[r][c]===0||visited.has(`${r}-${c}`)) return 0
        visited.add(`${r}-${c}`)
        return 1+ dfs(r+1,c)+dfs(r-1,c)+dfs(r,c-1)+dfs(r,c+1)
    }
    return maxArea
}

//time complexity : O(R*C)