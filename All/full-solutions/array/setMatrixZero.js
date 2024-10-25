function setMatrixZeroes(matrix) {
    if (matrix.length === 0) return;

    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowZero = false;
    let firstColZero = false;

    // Check if first row has any zeroes
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // Check if first column has any zeroes
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    // Use first row and column as markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set rows and columns to zero based on markers
    for (let i = 1; i < m; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 1; j < n; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < m; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero the first row if needed
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero the first column if needed
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}

// Example usage:
let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
setMatrixZeroes(matrix);
console.log(matrix); // Output: [[1,0,1],[0,0,0],[1,0,1]]
