var searchMatrix = function(matrix, target) {
    let R = matrix.length
    let C = matrix[0].length

    let r = 0 ,c = C-1
    while(r<R && c>=0){
        if(matrix[r][c]===target) return true
        if(matrix[r][c] < target){
            r++
        }else{
            c--
        }
    }
    return false 

};