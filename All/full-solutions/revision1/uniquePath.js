// https://leetcode.com/problems/unique-paths/description/ (with obstacles and return True if reachable)

function uniquePath(m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i - 1 >= 0) {
        dp[i][j] += dp[i - 1][j];
      }
      if (j - 1 >= 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}


//with obstacles
function uniquePathWithObstacles(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  // If the starting cell has an obstacle, return 0
  if (grid[0][0] === 1) return 0;

  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dp[i][j] = 0; // No paths through obstacles
      } else {
        if (i > 0) {
          dp[i][j] += dp[i - 1][j];
        }
        if (j > 0) {
          dp[i][j] += dp[i][j - 1];
        }
      }
    }
  }

  return dp[m - 1][n - 1];
}
