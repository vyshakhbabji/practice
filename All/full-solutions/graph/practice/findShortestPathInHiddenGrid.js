function shortestPathInHiddenGrid(start, target, grid) {


}

// Example of grid function
function exampleGrid(x, y) {
    const gridMap = [
        [true, true, false, true, true],
        [true, true, true, true, true],
        [true, true, true, false, true],
        [false, false, true, false, false],
        [true, true, true, true, true]
    ];

    if (x < 0 || y < 0 || x >= gridMap.length || y >= gridMap[0].length) {
        return false;
    }

    return gridMap[x][y];
}

// Sample input
const start = [0, 0];
const target = [4, 4];

// Function call to test your code
const result = shortestPathInHiddenGrid(start, target, exampleGrid);
console.log(result);  // Should print the shortest path length or -1 if no path exists
