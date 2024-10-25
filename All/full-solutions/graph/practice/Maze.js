function hasPath(maze, start, destination) {
    const rows = maze.length;
    const cols = maze[0].length;
    const directions = [
        [-1, 0],  // Up
        [1, 0],   // Down
        [0, -1],  // Left
        [0, 1]    // Right
    ];

    const queue = [start];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const [currentX, currentY] = queue.shift();

        if (currentX === destination[0] && currentY === destination[1]) {
            return true;
        }

        for (const [dx, dy] of directions) {
            let newX = currentX;
            let newY = currentY;

            // Roll the ball until it hits a wall
            while (newX >= 0 && newX < rows && newY >= 0 && newY < cols && maze[newX][newY] === 0) {
                newX += dx;
                newY += dy;
            }

            // Step back to the last valid position ie not 0 position ,one pos behind
            newX -= dx;
            newY -= dy;

            if (!visited.has([newX, newY].toString())) {
                visited.add([newX, newY].toString());
                queue.push([newX, newY]);
            }
        }
    }

    return false;
}

// Example usage:
const maze = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0]
];
const start = [0, 4];
const destination = [4, 4];
console.log(hasPath(maze, start, destination)); // Output: true
