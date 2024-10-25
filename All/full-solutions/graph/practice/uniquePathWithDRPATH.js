function findPaths(m, n) {
    let result = [];

    // Helper function for backtracking
    function backtrack(i, j, path) {
        // If we reached the bottom-right corner, add the current path to the result
        if (i === m - 1 && j === n - 1) {
            result.push(path);
            return;
        }

        // Move down if possible
        if (i < m - 1) {
            backtrack(i + 1, j, path + "D");
        }

        // Move right if possible
        if (j < n - 1) {
            backtrack(i, j + 1, path + "R");
        }
    }

    // Start the recursion from the top-left corner
    backtrack(0, 0, "");

    return result;
}

// Example usage
const m = 3;
const n = 3;
console.log(findPaths(m, n));


// Time complexity: O(2^(m+n)) - Exponential
// Space complexity: O(m+n) - Recursive stack space