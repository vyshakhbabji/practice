/*
                         =>  with prefixsum      00   01   02        =>  0   0   0
1   3   (00) (01)                                10   11   12            0   1   4
3   4   (10)  (11)                               20   21   22            0   4   10(4+4+3+1 -1)


ps[i][j] = ps[i-1][j]+ps[i][j-1]-ps[i-1][j-1]+mat[i][j]


*/



var NumMatrix = function(matrix) {
    let R = matrix.length , C = matrix[0].length;

    //prefixSum matrix
    this.prefixSumMatrix = Array(R+1).fill(0).map(()=>Array(C+1).fill(0))

    // first row and first col is 0 ---- basecase
    //so the second row,col onwards needs to be filled
    for(let r =0; r < R; r++){
        for(let c=0; c<C; c++){

            this.prefixSumMatrix[r+1][c+1] =
                matrix[r][c] +
                this.prefixSumMatrix[r][c+1] +
                this.prefixSumMatrix[r+1][c] -
                this.prefixSumMatrix[r][c] // remove diagonal
        }
    }

};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {


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



