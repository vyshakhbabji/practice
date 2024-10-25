function kthSmallest(matrix, k) {
    const n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let count = countLessEqual(matrix, mid, n);

        if (count < k) {
            left = mid + 1; // mid is too small
        } else {
            right = mid; // mid might be the answer
        }
    }

    return left;
}

function countLessEqual(matrix, mid, n) {
    let count = 0;
    let row = n - 1;
    let col = 0;

    while (row >= 0 && col < n) {
        if (matrix[row][col] <= mid) {
            // All elements in this row up to `col` are <= `mid`
            count += (row + 1);
            col++;
        } else {
            // Element is too large, move up
            row--;
        }
    }

    return count;
}

// Example usage:
const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
];
const k = 8;
console.log(kthSmallest(matrix, k)); // Output: 13
