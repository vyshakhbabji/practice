function findFarmland(land) {
    const rows = land.length;
    const cols = land[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    const result = [];

    function bfs(startRow, startCol) {
        const queue = [[startRow, startCol]];
        visited[startRow][startCol] = true;

        let minRow = startRow, maxRow = startRow;
        let minCol = startCol, maxCol = startCol;

        while (queue.length > 0) {
            const [currentRow, currentCol] = queue.shift();

            for (const [dx, dy] of directions) {
                const newRow = currentRow + dx;
                const newCol = currentCol + dy;

                if (
                    newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    !visited[newRow][newCol] &&
                    land[newRow][newCol] === 1
                ) {
                    visited[newRow][newCol] = true;
                    queue.push([newRow, newCol]);

                    minRow = Math.min(minRow, newRow);
                    maxRow = Math.max(maxRow, newRow);
                    minCol = Math.min(minCol, newCol);
                    maxCol = Math.max(maxCol, newCol);
                }
            }
        }

        return [minRow, minCol, maxRow, maxCol];
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (land[r][c] === 1 && !visited[r][c]) {
                result.push(bfs(r, c));
            }
        }
    }

    return result;
}

// Example usage:
const land = [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1]
];
console.log(findFarmland(land)); // Output: [[0,0,1,0], [0,3,1,3], [2,2,3,3], [3,1,3,1]]
