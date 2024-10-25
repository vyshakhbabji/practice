function longestIincreasingPathMatrix(matrix){

    let R = matrix.length;
    let C = matrix[0].length;
    let visited = new Set();
    let longestPath = 0;
    let dp = Array.from({length: R}, () => Array(C).fill(0));
    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            let path = dfs(r, c);
            longestPath = Math.max(longestPath, path);
        }
    }

    function dfs(r, c) {
        if (dp[r][c] !== 0) return dp[r][c];
        let max = 1;
        for (let [dr,dc] of dirs) {
            let nr = r + dr;
            let nc = c + dc;
            if (nr < 0 || nr >= R || nc < 0 || nc >= C || matrix[nr][nc] <= matrix[r][c]) continue;
            max = Math.max(max, 1 + dfs(nr, nc));
        }
        dp[r][c] = max;
        return max;
    }

}