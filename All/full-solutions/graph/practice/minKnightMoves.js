function minKnightMoves(x, y) {
    // Define the possible moves for a knight
    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    // Use a set to keep track of visited positions
    const visited = new Set();
    const queue = [[0, 0, 0]]; // [current_x, current_y, steps]

    // Add the starting position to the visited set
    visited.add('0,0');

    while (queue.length > 0) {
        const [curX, curY, steps] = queue.shift();

        // If we reached the target position, return the number of steps
        if (curX === x && curY === y) {
            return steps;
        }

        for (const [dx, dy] of directions) {
            const newX = curX + dx;
            const newY = curY + dy;
            const pos = `${newX},${newY}`;

            // Check if the new position is visited or not
            if (!visited.has(pos)) {
                visited.add(pos);
                queue.push([newX, newY, steps + 1]);
            }
        }
    }

    return -1; // Should never reach here if the input is valid
}

// Example usage:
console.log(minKnightMoves(5, 5)); // Output: 4


//ffor symetry

function minKnightMovesOptimized(x, y) {
    // Define the possible moves for a knight
    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    // Use a set to keep track of visited positions
    const visited = new Set();
    const queue = [[0, 0, 0]]; // [current_x, current_y, steps]

    // Add the starting position to the visited set
    visited.add('0,0');

    // Use absolute values to reduce symmetry
    x = Math.abs(x);
    y = Math.abs(y);

    while (queue.length > 0) {
        const [curX, curY, steps] = queue.shift();

        // If we reached the target position, return the number of steps
        if (curX === x && curY === y) {
            return steps;
        }

        for (const [dx, dy] of directions) {
            const newX = curX + dx;
            const newY = curY + dy;
            const pos = `${newX},${newY}`;

            // Check if the new position is visited or not
            if (!visited.has(pos) && newX >= -1 && newY >= -1) {
                visited.add(pos);
                queue.push([newX, newY, steps + 1]);
            }
        }
    }

    return -1; // Should never reach here if the input is valid
}

// Example usage:
console.log(minKnightMoves(5, 5)); // Output: 4
