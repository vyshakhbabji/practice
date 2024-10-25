var nearestExit = function (maze, entrance) {
    let R = maze.length
    let C = maze[0].length

    //borders defined = > R 0 , 0 C R C 


   // Special case: Single row maze
    if (R === 1) {
        for (let c = 0; c < C; c++) {
            if (c !== entrance[1] && maze[0][c] === '.') {
                return Math.abs(c - entrance[1]); // Distance is simply the column difference
            }
        }
        return -1; // No valid exit found
    }

    // Special case: Single column maze
    if (C === 1) {
        for (let r = 0; r < R; r++) {
            if (r !== entrance[0] && maze[r][0] === '.') {
                return Math.abs(r - entrance[0]); // Distance is simply the row difference
            }
        }
        return -1; // No valid exit found
    }



    let q = []
    q.push([entrance[0], entrance[1], 0])
    let visited = new Set()
    visited.add(`${entrance[0]}, ${entrance[1]}`)

    let dir = [[0, 1], [1, 0], [-1, 0], [0, -1]]

    while (q.length > 0) {
        let [r, c, steps] = q.shift()

        // if r is not entrance row or c is not entrance col or r and c are not in boundry and r and c are enpty cell 
        // Check if we're on a boundary but not the entrance itself

        if ((r!==entrance[0]||c!==entrance[1]) && (r === 0 || r === R - 1 || c === 0 || c === C - 1) && maze[r][c] === ".") {
            return steps
        }
        for (let [dr, dc] of dir) {
            let nr = dr + r, nc = dc + c
            if (nr >= 0 && nr < R && nc >= 0 && nc < C && maze[nr][nc] !== "+" && !visited.has(`${nr},${nc}`)) {
                visited.add(`${nr},${nc}`)
                q.push([nr, nc, steps + 1])
            }
        }
    }
    return -1
};


// Time complexity O(RXC) and space = O(RXC)






