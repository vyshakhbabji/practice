function isPalindrome(seq) {
    let left = 0;
    let right = seq.length - 1;
    while (left < right) {
        if (seq[left] !== seq[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function checkMatrixPalindrome(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Check all rows
    for (let i = 0; i < rows; i++) {
        if (isPalindrome(matrix[i])) {
            return true;
        }
    }

    // Check all columns
    for (let c = 0; c < cols; c++) {
        let column = [];
        for (let r = 0; r < rows; r++) {
            column.push(matrix[r][c]);
        }
        if (isPalindrome(column)) {
            return true;
        }
    }

    // Check main diagonal
    let mainDiag = [];
    for (let i = 0; i < Math.min(rows, cols); i++) {
        mainDiag.push(matrix[i][i]);
    }
    if (isPalindrome(mainDiag)) {
        return true;
    }

    // Check anti-diagonal
    let antiDiag = [];
    for (let i = 0; i < Math.min(rows, cols); i++) {
        antiDiag.push(matrix[i][cols - 1 - i]);
    }
    if (isPalindrome(antiDiag)) {
        return true;
    }

    return false;
}

// Example usage:
let matrix = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'F'],
    ['H', 'I', 'J', 'I'],
    ['D', 'C', 'B', 'A']
];

console.log(checkMatrixPalindrome(matrix));  // Output: true
