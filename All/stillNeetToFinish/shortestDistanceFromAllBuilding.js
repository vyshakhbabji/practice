function shortestDistance(grid) {
    // If the grid is empty, return -1 (no valid distance)
    if (!grid || grid.length === 0 || grid[0].length === 0) return -1;

    // Directions to move: right, down, left, up
    let dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let R = grid.length;  // Number of rows
    let C = grid[0].length;  // Number of columns

    let totalBuildings = 0;  // Count of total buildings

    // Initialize two grids to keep track of:
    // - distance: total distance from all buildings to empty land
    // - reach: how many buildings can reach each empty land
    let distance = Array(R).fill().map(() => Array(C).fill(0));
    let reach = Array(R).fill().map(() => Array(C).fill(0));

    // Traverse the grid to find all buildings
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 1) {  // If it's a building
                totalBuildings++;    // Increase the building count
                // Perform BFS starting from this building
                bfs(r, c);
            }
        }
    }

    // Perform BFS to calculate distance and reach from a building
    function bfs(r, c) {
        let q = [];
        q.push([r, c, 0]);  // Add the building's position and distance (0)
        let visited = new Set();  // Track visited positions to avoid revisiting
        visited.add(`${r}-${c}`);

        // While there are positions to explore
        while (q.length > 0) {
            let [r, c, dist] = q.shift();  // Get the next position and distance

            // Explore all 4 directions (right, down, left, up)
            for (let [dr, dc] of dir) {
                let nr = dr + r, nc = dc + c;  // Calculate the new row and column

                // Check if the new position is within bounds, is empty land (0), and not visited
                if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] === 0 && !visited.has(`${nr}-${nc}`)) {
                    visited.add(`${nr}-${nc}`);  // Mark the new position as visited
                    let newDistance = dist + 1;  // Calculate the new distance
                    distance[nr][nc] += newDistance;  // Add the new distance to this empty land
                    reach[nr][nc]++;  // Increase the count of buildings that can reach this empty land
                    q.push([nr, nc, newDistance]);  // Add the new position and distance to the queue
                }
            }
        }
    }

    let shortestDistance = Infinity;  // Initialize the shortest distance as infinite

    // Check all empty lands to find the one with the shortest distance to all buildings
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            // If it's an empty land and it can reach all buildings
            if (grid[r][c] === 0 && reach[r][c] === totalBuildings) {
                // Update the shortest distance if this one is smaller
                shortestDistance = Math.min(shortestDistance, distance[r][c]);
            }
        }
    }

    // If we never found a valid shortest distance, return -1. Otherwise, return the shortest distance.
    return shortestDistance === Infinity ? -1 : shortestDistance;
}
