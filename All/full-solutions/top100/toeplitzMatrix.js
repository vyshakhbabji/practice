
function isToeplitzMatrix(matrix){

    let R = matrix.length , C = matrix[0].length

    for(let i = 1 ; i< R ; i++){
        for (let j= 1 ; j < C ; j++){
            if(matrix[i][j] !== matrix[i-1][j-1]) return false
        }
    }

    return true

}

let matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
console.log(isToeplitzMatrix(matrix)) //true

let matrix2 = [[1,2],[2,2]]
console.log(isToeplitzMatrix(matrix2)) //false


