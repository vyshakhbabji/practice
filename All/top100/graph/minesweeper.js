var updateBoard = function(board, click) {
    let R =board.length
    let C = board[0].length

    let dir = [[0, 1], [0, -1],
                        [1, 0], [-1, 0],
                            [1, 1], [-1, -1],
                                [1, -1], [-1, 1]];

    // M = unrevealed mines
    //E = unrevealed empty square
    //B = blank squares no adj mines
    // 1 - 8  how many mines in adj to reveal squares
    // X revealed mines

    //click will be [r,c]
    let [cr, cc] = click

    if(board[cr][cc] === 'M') {
        board[cr][cc] = 'X'
    } else {
        dfs(cr, cc)
    }

    function dfs(r, c){

    }

    return board


}