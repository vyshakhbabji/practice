function minTotalDistance(grid) {
    const rows = [];
    const cols = [];

    // Step 1: Collect the coordinates of the houses
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {  // House is represented by 1
                rows.push(i);  // Collect the row (x) coordinates
                cols.push(j);  // Collect the column (y) coordinates
            }
        }
    }

    // Step 2: Sort the coordinates to find the median
    rows.sort((a, b) => a - b);
    cols.sort((a, b) => a - b);

    // Step 3: Find the medians
    const medianRow = rows[Math.floor(rows.length / 2)];
    const medianCol = cols[Math.floor(cols.length / 2)];

    // Step 4: Calculate the total Manhattan distance to the median
    let totalDistance = 0;

    for (let row of rows) {
        totalDistance += Math.abs(row - medianRow);
    }

    for (let col of cols) {
        totalDistance += Math.abs(col - medianCol);
    }

    return totalDistance;
}

// Example usage:
const grid = [
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
];
console.log(minTotalDistance(grid));  // Output: 6
