var numberOfCleanRooms = function(room) {
    const R = room.length;
    const C = room[0].length;

    // Directions: right, down, left, up
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let direction = 0; // Start facing right
    let x = 0, y = 0; // Start at the top left corner
    let count = 0;

    const visited = new Set(); // To track visited cells with their current direction

    while (true) {
        // If the current cell is empty and has not been visited in the current direction
        if (room[x][y] === 0 && !visited.has(`${x},${y}`)) {
            visited.add(`${x},${y}`);
            count++;
        }

        // Calculate next cell based on current direction
        let nx = x + directions[direction][0];
        let ny = y + directions[direction][1];

        // If next cell is within bounds and is an empty space
        if (nx >= 0 && ny >= 0 && nx < R && ny < C && room[nx][ny] === 0) {
            x = nx; // Move to next cell
            y = ny;
        } else {
            // Change direction clockwise
            direction = (direction + 1) % 4;
        }

        // If we have already visited this cell in the same state (same cell, same direction), stop
        if (visited.has(`${x},${y},${direction}`)) {
            break;
        }

        // Mark the current cell as visited with the current direction
        visited.add(`${x},${y},${direction}`);
    }

    return count;
};
