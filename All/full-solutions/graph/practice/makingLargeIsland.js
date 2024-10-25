/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
    let R = grid.length
    let C = grid[0].length
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    //create id and assign to each islad
    //capture the size of each existing islands
    // store id and size in the map

    let id = 2
    let map = {}

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 1) {
                size = dfs(r, c, id)
                map[id] = size
                id++
            }
        }
    }

    function dfs(r, c, id) {
        if (r < 0 || r >= R || c < 0 || c >= C || grid[r][c] !== 1) return 0
        grid[r][c] = id
        let size = 1
        for (let [dr, dc] of dir) {
            let nr = dr + r, nc = dc + c
            size += dfs(nr, nc, id)
        }
        return size
    }

    let maxSize = Math.max(...Object.values(map))


    //now select only 0's and see if swiching to 1 will change thier maxsize
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 0) {
                let potentialSize = 1
                let visited = new Set()
                for (let [dr, dc] of dir) {
                    let nr = r + dr, nc = c + dc
                    if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
                        let checkId = grid[nr][nc]
                        if (!visited.has(checkId) && checkId > 1) {
                            visited.add(checkId)
                            let area = map[checkId] || 0
                            potentialSize += area
                        }
                    }
                }
                maxSize = Math.max(maxSize, potentialSize)
            }
        }
    }

    return maxSize


};