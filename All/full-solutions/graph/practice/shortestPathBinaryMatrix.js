function shortestPathBinaryMatrix(grid) {
    const n = grid.length;
    if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1;

    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    const queue = [[0, 0, 1]]; // [row, column, path length]
    grid[0][0] = 1; // Mark the starting cell as visited

    while (queue.length > 0) {
        const [r, c, length] = queue.shift();

        if (r === n - 1 && c === n - 1) {
            return length;
        }

        for (const [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;

            if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && grid[newRow][newCol] === 0) {
                queue.push([newRow, newCol, length + 1]);
                grid[newRow][newCol] = 1; // Mark the cell as visited
            }
        }
    }

    return -1;
}


//function shortestPathBinaryMatrix(grid):
//     if grid[0][0] == 1 or grid[n-1][n-1] == 1:
//         return -1
//
//     directions = [(1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1)]
//     initialize queue with (0, 0, 1)  # (row, column, path length)
//     mark grid[0][0] as visited by setting it to 1
//
//     while queue is not empty:
//         (r, c, length) = dequeue from queue
//
//         if (r, c) == (n-1, n-1):
//             return length
//
//         for (dr, dc) in directions:
//             newRow = r + dr
//             newCol = c + dc
//             if 0 <= newRow < n and 0 <= newCol < n and grid[newRow][newCol] == 0:
//                 enqueue (newRow, newCol, length + 1) to queue
//                 mark grid[newRow][newCol] as visited by setting it to 1
//
//     return -1

//Input: grid = [[0,1],[1,0]]
// Output: 2
//
// Explanation: The path is (0, 0) -> (1, 1)