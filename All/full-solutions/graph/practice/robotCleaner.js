/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const visited = new Set();

    function goBack(robot) {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }

    function backtrack(cell = [0, 0], direction = 0) {
        visited.add(cell.join(','));
        robot.clean();

        for (let i = 0; i < 4; i++) {
            const newDirection = (direction + i) % 4;
            const newRow = cell[0] + directions[newDirection][0];
            const newCol = cell[1] + directions[newDirection][1];
            const newCell = [newRow, newCol].join(',');

            if (!visited.has(newCell) && robot.move()) {
                backtrack([newRow, newCol], newDirection);
                goBack(robot);
            }

            robot.turnRight();
        }
    }

    backtrack();
};