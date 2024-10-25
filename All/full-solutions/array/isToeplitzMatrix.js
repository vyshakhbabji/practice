function isToeplitzMatrix(matix){

    let m  = matix.length
    let n = matix[0].length

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n  ; j++) {
            if(matix[i-1][j-1]!=matix[i][j]){
                return false
            }
        }

    }
    return true
}


let matrix= [[1, 2],
    [2, 2]]
console.log(isToeplitzMatrix(matrix))