var minPathSum = function(grid) {
    let R = grid.length;
    let C = grid[0].length;
    
    // Use only a 1D array for the current row
    let dp = Array(C).fill(Infinity);
    
    // Initialize the first cell
    dp[0] = grid[0][0];
    
    // Fill the first row
    for (let c = 1; c < C; c++) {
        dp[c] = dp[c - 1] + grid[0][c];
    }
    
    // Process the rest of the rows
    for (let r = 1; r < R; r++) {
        dp[0] += grid[r][0];  // Update the first column
        for (let c = 1; c < C; c++) {
            dp[c] = grid[r][c] + Math.min(dp[c], dp[c - 1]);
        }
    }
    
    // The answer is the last cell in the dp array
    return dp[C - 1];
};
