function uniquePathsWithObstacles(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Memoization cache
    const memo = Array.from({ length: m }, () => Array(n).fill(-1));

    function dfs(x, y) {
        // If out of bounds or cell is blocked, return 0
        if (x >= m || y >= n || grid[x][y] === 1) {
            return 0;
        }

        // If we reach the bottom-right corner, return 1
        if (x === m - 1 && y === n - 1) {
            return 1;
        }

        // If already computed, return the stored result
        if (memo[x][y] !== -1) {
            return memo[x][y];
        }

        // Recursively compute the number of paths from this cell
        const rightPaths = dfs(x, y + 1);
        const downPaths = dfs(x + 1, y);

        // Store the result in the memo table
        memo[x][y] = rightPaths + downPaths;

        return memo[x][y];
    }

    // Start DFS from the top-left corner
    return dfs(0, 0);
}


// Example usage
const grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];

console.log(uniquePathsWithObstacles(grid)); // Output: 2
// Time complexity: O(m * n) - We visit each cell once
// Space complexity: O(m * n) - Recursive stack space and memoization table

//exponeential time complexity
