var updateBoard = function(board, click) {
    let R = board.length, C = board[0].length;
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];

    let [cr,cc] = click
    if(board[cr][cc] === 'M'){
        board[cr][cc] = 'X'
    }else{
        dfs(cr,cc)
    }

    // its either mine M or emopty E
    function dfs(r, c){

        if(r<0 || r>=R || c<0 || c>=C || board[r][c] !=='E') return

        let minecount = 0
        for (let [dr,dc] of directions){
            let nr = dr+r , nc = dc+c
            if(nr>=0 && nr < R && nc >=0 && nc<C && board[nr][nc] === 'M'){
                minecount++
            }
        }

        if(minecount>0){
            board[r][c] = minecount.toString()
        }
        else{
            board[r][c] = 'B'
            for(let [dr,dc] of directions){
                dfs(r+dr, c+dc)
            }
        }
    }


    return board
};
