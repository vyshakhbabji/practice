var kthSmallest = function(matrix, k) {

    let R = matrix.length
    let C = matrix[0].length
    //would this work for a non-square matrix?

    let l = matrix[0][0]
    let r = matrix[R-1][C-1]

    while(l<=r){
        let m = Math.floor((l+r)/2)
        let count = 0
        for(let i=0;i<R;i++){
            for(let j=0;j<C;j++){
                if(matrix[i][j]<=m){
                    count++
                }
            }
        }
        if(count<k){
            l = m+1
        }else{
            r = m-1
        }
    }

    return l
};

const matrix = [[1,5,9],[10,11,13],[12,13,15]]
const k = 8

console.log(kthSmallest(matrix, k)) // Output: 13