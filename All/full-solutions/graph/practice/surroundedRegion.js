function surroundedRegions(board) {
    const R = board.length
    const C = board[0].length

    let visited = new Set()

    //set border cells to * so we can revert it later
    for(let i=0;i<R;i++){
        for(let j=0;j<C;j++){
            if((i===0 || i===R-1 || j===0 || j===C-1) && board[i][j]==='O'){
                dfs(i,j)
            }
        }
    }

    for(let i=0;i<R;i++){
        for(let j=0;j<C;j++){
            if(board[i][j]==='O'){
                board[i][j] = 'X'
            }
            if(board[i][j]==='B') {
                board[i][j] = 'O'
            }
        }
    }

    function dfs(r,c){
        if(r<0 || r>=R || c<0 || c>=C || board[r][c]!=='O'){
            return
        }

        board[r][c] = 'B'

        dfs(r+1,c)
        dfs(r,c+1)
        dfs(r-1,c)
        dfs(r,c-1)
    }

    //revert the * to O and O to X
    for(let i=0;i<R;i++){
        for(let j=0;j<C;j++){
          if(board[i][j]==='*'){
                board[i][j] = 'O'
            }
        }
    }

    return board
}

// Sample input
const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
];

// Expected output
const expectedOutput = [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X']
];

// Function call to test your code
surroundedRegions(board);
console.log(board);  // Should print the expected output board if your implementation is correct
