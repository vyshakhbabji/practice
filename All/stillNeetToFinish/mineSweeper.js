var updateBoard = function(board, click) {
    let rows = board.length, cols = board[0].length;
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];

    // M => unrevealed mine
    // E => unrevealed empty square
    // B => blank square with no adjacent mines (revealed)
    // X => revealed mine (when clicked, game over)

    // click is an integer array [r, c] representing the row and column of the cell to be revealed

    // Conditions:
    // - If an unrevealed mine ('M') is clicked, change it to 'X' (game over).
    // - If an empty square ('E') is clicked:
    //    - If there are no adjacent mines, change it to 'B' and recursively reveal all adjacent unrevealed squares.
    //    - If there are adjacent mines, change it to a digit ('1' to '8') representing the number of adjacent mines.
    // - Return the updated board when no more squares need to be revealed.

    function dfs(r, c) {
        // Base case: If the cell is out of bounds or not an unrevealed empty square, return.
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'E') {
            return;
        }

        // Count adjacent mines around the current cell
        let mineCount = 0;
        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] === 'M') {
                mineCount++;
            }
        }

        // If there are adjacent mines, update the cell with the mine count.
        // Otherwise, mark the cell as 'B' and recursively reveal its neighbors.
        if (mineCount > 0) {
            board[r][c] = mineCount.toString();
        } else {
            board[r][c] = 'B';
            for (let [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }
        }
    }

    let [clickRow, clickCol] = click;

    // If the clicked cell is a mine, change it to 'X' (game over)
    if (board[clickRow][clickCol] === 'M') {
        board[clickRow][clickCol] = 'X';
    } else {
        // Otherwise, reveal the cell using DFS
        dfs(clickRow, clickCol);
    }

    return board;
};
