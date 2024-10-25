function islandPerimeter(grid){

    let R = grid.length
    let C =grid[0].length
    let perimeter = 0
    let visited = new Set() //`${r}-${c}`
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (!visited.has(`${r}-${c}`) && grid[r][c] === 1) {
                perimeter += dfs(r, c)
            }
        }
    }

    function dfs(r, c) {
        if (r < 0 || r >= R || c < 0 || c >= C || grid[r][c] === 0) { // out of bounds or water , so return 1 for perimeter
            return 1
        }
        if (visited.has(`${r}-${c}`)) return 0; // already visited
        visited.add(`${r}-${c}`)
        return dfs(r + 1, c) + dfs(r, c + 1) + dfs(r - 1, c) + dfs(r, c - 1)
    }

    return perimeter

}

//time complexity : O(R*C)