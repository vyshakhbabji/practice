function printAnyPath(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    // To store the path we are currently exploring
    let path = [];

    // Create a visited matrix to avoid revisiting cells
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    // DFS function
    function dfs(x, y) {
        // Base case: if we reach the bottom-right corner, print the path
        if (x === m - 1 && y === n - 1) {
            path.push([x, y]);  // Add the final cell to the path
            console.log("Path found:", path);
            return true;
        }

        // Mark the current cell as visited and add it to the path
        visited[x][y] = true;
        path.push([x, y]);

        // Possible directions (down, right, up, left)
        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

        // Explore all directions
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // Check if the move is valid
            if (newX >= 0 && newX < m && newY >= 0 && newY < n && matrix[newX][newY] === 0 && !visited[newX][newY]) {
                if (dfs(newX, newY)) {
                    return true;  // If a valid path is found, stop further exploration
                }
            }
        }

        // Backtrack: unmark the current cell and remove it from the path
        visited[x][y] = false;
        path.pop();
        return false;  // No valid path found from this cell
    }

    // Start DFS from the top-left corner (0, 0)
    if (matrix[0][0] === 0) {
        dfs(0, 0);
    } else {
        console.log("No path found (start is blocked)");
    }
}

// Example usage
const matrix = [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 0],
    [0, 0, 0, 0]
];

printAnyPath(matrix);

// Time complexity: O(3^(m*n)) - Exponential
// Space complexity: O(m*n) - Recursive stack space

/*
Let's break it down:
Space complexity is still O(m * n) because we maintain a visited matrix and recursion stack space of maximum depth m * n (the size of the matrix).

Time complexity depends on the number of choices at each step. At each cell, the algorithm can potentially move in up to 4 directions. However, with backtracking, the number of recursive calls reduces since we don't revisit already visited paths.

Now, let’s look at the number of recursive calls in the worst case:

If the matrix is full of 0s (no blocked cells), every cell will have 3 or 4 possible directions to explore.
The time complexity is therefore approximately O(3^(m * n)) in the worst case because for every cell, the DFS explores 3 other directions (backtracking reduces it from 4 to 3).

 */