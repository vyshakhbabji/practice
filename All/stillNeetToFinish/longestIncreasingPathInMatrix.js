function longestIncreasingPath(matrix) {
    if (matrix.length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const memo = Array.from({ length: rows }, () => Array(cols).fill(0));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    function dfs(i, j) {
        if (memo[i][j] !== 0) return memo[i][j];

        let maxLength = 1;
        for (const [dx, dy] of directions) {
            const x = i + dx;
            const y = j + dy;
            if (x >= 0 && x < rows && y >= 0 && y < cols && matrix[x][y] > matrix[i][j]) {
                maxLength = Math.max(maxLength, 1 + dfs(x, y));
            }
        }

        memo[i][j] = maxLength;
        return maxLength;
    }

    let maxPath = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            maxPath = Math.max(maxPath, dfs(i, j));
        }
    }

    return maxPath;
}

// Example usage:
console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])); // Output: 4
console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])); // Output: 4
