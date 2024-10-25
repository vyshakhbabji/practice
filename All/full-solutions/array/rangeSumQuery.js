var NumMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    // this.prefixSum = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    // rewrite simple 2D array
    this.prefixSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            //prefixsum = currentCell  + left + top - left Diagonal
            this.prefixSum[i][j] = matrix[i - 1][j - 1] +
                                        this.prefixSum[i - 1][j] +  //left
                                        this.prefixSum[i][j - 1] - //top
                                        this.prefixSum[i - 1][j - 1]; //left diagonal
        }
    }

};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.prefixSum[row2 + 1][col2 + 1] -
            this.prefixSum[row1][col2 + 1] -
            this.prefixSum[row2 + 1][col1] +
            this.prefixSum[row1][col1];

};


// Example usage:
const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
];

const obj = new NumMatrix(matrix);
console.log(obj.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(obj.sumRegion(1, 1, 2, 2)); // Output: 11



