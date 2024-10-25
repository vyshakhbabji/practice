class Robot {
    // Provided methods to control the robot
    move() {
        // Returns true if the robot moves successfully; otherwise, returns false
    }

    turnLeft() {
        // Rotates the robot 90 degrees to the left
    }

    turnRight() {
        // Rotates the robot 90 degrees to the right
    }

    clean() {
        // Cleans the current cell
    }
}

// Directions array representing [up, right, down, left] movements
const directions = [
    [-1, 0],  // Up
    [0, 1],   // Right
    [1, 0],   // Down
    [0, -1]   // Left
];

function cleanRoom(robot) {
    const visited = new Set();

    function dfs(x, y, d) {
        // Clean the current cell and mark it as visited
        robot.clean();
        visited.add(`${x},${y}`);

        // Explore all four directions
        for (let i = 0; i < 4; i++) {
            const newDir = (d + i) % 4;
            const newX = x + directions[newDir][0];
            const newY = y + directions[newDir][1];

            // If the new cell has not been visited and the robot can move, explore it
            if (!visited.has(`${newX},${newY}`) && robot.move()) {
                dfs(newX, newY, newDir);
                // Backtrack to the previous cell and restore the direction
                backtrack();
            }

            // Turn the robot to the right to explore the next direction
            robot.turnRight();
        }
    }

    function backtrack() {
        // Turn 180 degrees
        robot.turnRight();
        robot.turnRight();
        // Move one step back
        robot.move();
        // Turn 180 degrees again to restore the original direction
        robot.turnRight();
        robot.turnRight();
    }

    // Start DFS from the initial position (0, 0) facing up (direction 0)
    dfs(0, 0, 0);
}

// Example usage:
// const robot = new Robot();
// cleanRoom(robot);
