function pacificAtlantic(matrix) {
    if (matrix.length === 0) return [];

    const rows = matrix.length;
    const cols = matrix[0].length;
    const pacificReachable = new Set();
    const atlanticReachable = new Set();

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    function dfs(r, c, reachable) {
        reachable.add(`${r},${c}`);

        for (const [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols &&
                !reachable.has(`${newRow},${newCol}`) && matrix[newRow][newCol] >= matrix[r][c]) {
                dfs(newRow, newCol, reachable);
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pacificReachable);
        dfs(r, cols - 1, atlanticReachable);
    }

    for (let c = 0; c < cols; c++) {
        dfs(0, c, pacificReachable);
        dfs(rows - 1, c, atlanticReachable);
    }

    const result = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacificReachable.has(`${r},${c}`) && atlanticReachable.has(`${r},${c}`)) {
                result.push([r, c]);
            }
        }
    }

    return result;
}


//function pacificAtlantic(matrix):
//     if matrix is empty:
//         return []
//
//     initialize pacific_reachable set
//     initialize atlantic_reachable set
//     initialize directions array for DFS/BFS
//
//     for each cell on the top and left borders:
//         perform DFS from cell and mark all reachable cells in pacific_reachable
//
//     for each cell on the bottom and right borders:
//         perform DFS from cell and mark all reachable cells in atlantic_reachable
//
//     result = []
//     for each cell in matrix:
//         if cell is in both pacific_reachable and atlantic_reachable:
//             add cell to result
//
//     return result