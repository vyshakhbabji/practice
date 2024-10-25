function shortestPathBinaryMatrix(grid) {
    const n = grid.length;

    // If the starting or ending cell is blocked, no path is possible
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return [];

    // Directions for moving in 8 directions
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]
    ];

    // BFS initialization: queue with the starting cell and the path so far
    const queue = [[0, 0, [[0, 0]]]];
    grid[0][0] = 1; // Mark as visited

    while (queue.length > 0) {
        const [x, y, path] = queue.shift();

        // If we've reached the bottom-right corner, return the path
        if (x === n - 1 && y === n - 1) {
            return path;
        }

        // Explore all 8 possible directions
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // Check if the new position is within bounds and is open (i.e., 0)
            if (newX >= 0 && newY >= 0 && newX < n && newY < n && grid[newX][newY] === 0) {
                grid[newX][newY] = 1; // Mark as visited
                queue.push([newX, newY, [...path, [newX, newY]]]); // Add new path
            }
        }
    }

    // If we exhaust the queue and never reach the bottom-right, return an empty array
    return [];
}

// Example usage:
const grid = [
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 0]
];
console.log(shortestPathBinaryMatrix(grid));


//O(n^2) for time complexity and O(n^2) for space complexity