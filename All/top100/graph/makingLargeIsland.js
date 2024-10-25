var largestIsland = function(grid) {
    const R = grid.length;
    const C = grid[0].length;
    const visited = new Set();
    const islandSizes = new Map();
    let islandId = 2; // Start from 2 to avoid confusion with 0 and 1 in the grid

    // DFS to calculate the size of an island
    function dfs(r, c, id) {
        if (r < 0 || r >= R || c < 0 || c >= C || grid[r][c] !== 1 || visited.has(`${r}-${c}`)) {
            return 0;
        }
        visited.add(`${r}-${c}`);
        grid[r][c] = id; // Mark the cell with the island id
        return 1 + dfs(r + 1, c, id) + dfs(r - 1, c, id) + dfs(r, c + 1, id) + dfs(r, c - 1, id);
    }

    // Calculate the size of each island
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 1 && !visited.has(`${r}-${c}`)) {
                const size = dfs(r, c, islandId);
                islandSizes.set(islandId, size);
                islandId++;
            }
        }
    }

    // If there are no 1s, the largest island is 1 (by changing one 0 to 1)
    if (islandSizes.size === 0) {
        return 1;
    }

    let maxIslandSize = Math.max(...islandSizes.values());

    // Check each 0 cell to see the potential island size if it were changed to 1
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 0) {
                const seenIslands = new Set();
                let potentialSize = 1; // Start with 1 for the current cell

                // Check all 4 directions
                if (r > 0 && grid[r - 1][c] > 1) seenIslands.add(grid[r - 1][c]);
                if (r < R - 1 && grid[r + 1][c] > 1) seenIslands.add(grid[r + 1][c]);
                if (c > 0 && grid[r][c - 1] > 1) seenIslands.add(grid[r][c - 1]);
                if (c < C - 1 && grid[r][c + 1] > 1) seenIslands.add(grid[r][c + 1]);

                for (let id of seenIslands) {
                    potentialSize += islandSizes.get(id);
                }

                maxIslandSize = Math.max(maxIslandSize, potentialSize);
            }
        }
    }

    return maxIslandSize;
};