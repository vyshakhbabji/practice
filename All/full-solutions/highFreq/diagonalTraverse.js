function findDiagonalOrder(matrix) {

    let R = matrix.length
    let C = matrix[0].length
    let hm = {}
    for(let i = 0 ; i <R; i++){
        for (let j=0;j<C ; j++){
            let key = i+j
            if(hm[key]===undefined) hm[key]=[]
            hm[key].push(matrix[i][j])
        }
    }

    const res = []
    const keys = Object.keys(hm)

    for(let k of keys){
        if(k%2===0)
            res.push(...hm[k].reverse())
        else
            res.push(...hm[k])
    }

    return res


}

// Example usage:
let matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
console.log(findDiagonalOrder(matrix)); // Output: [1, 2, 4, 7, 5, 3, 6, 8, 9]
