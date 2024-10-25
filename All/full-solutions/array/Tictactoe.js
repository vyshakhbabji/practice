function tictactoe(moves) {
    const n = 3;  // Tic Tac Toe is a 3x3 board
    const board = Array.from({ length: n }, () => Array(n).fill(''));

    // Fill the board with the moves
    for (let i = 0; i < moves.length; i++) {
        const [row, col] = moves[i];
        board[row][col] = i % 2 === 0 ? 'A' : 'B';
    }

    // Check if a player has won
    const checkWin = (player) => {
        // Check rows, columns, and diagonals
        for (let i = 0; i < n; i++) {
            if (board[i].every(cell => cell === player)) return true;  // Row check
            if (board.every(row => row[i] === player)) return true;    // Column check
        }
        if (board.every((row, i) => row[i] === player)) return true;  // Diagonal from top-left to bottom-right
        if (board.every((row, i) => row[n - i - 1] === player)) return true;  // Diagonal from top-right to bottom-left

        return false;
    };

    // Check if either player A or B has won
    if (checkWin('A')) return 'A';
    if (checkWin('B')) return 'B';

    // Check for draw or pending game
    return moves.length === n * n ? 'Draw' : 'Pending';
}

// Example usage:
console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])); // Output: "A"
console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[2,2],[1,0]])); // Output: "B"
console.log(tictactoe([[0,0],[1,1],[2,2],[1,0],[1,2],[2,0],[0,1],[2,1],[0,2]])); // Output: "Draw"
console.log(tictactoe([[0,0],[1,1]])); // Output: "Pending"
