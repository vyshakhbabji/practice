var findDiagonalOrder = function (mat) {
    let R = mat.length, C = mat[0].length;

    let res = Array(R + C - 1).fill().map(() => [])

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            let dia = i + j
            if (dia % 2 === 0) {
                res[dia].unshift(mat[i][j])
            } else {
                res[dia].push(mat[i][j])
            }
        }
    }


    return res.flat();
};