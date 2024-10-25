//Each row should contain 1-8 without rep
//each col 1-9 without rep
//each 3*3 should countain 1-9 without rep

function validSudoku(board){
    const row = Array.from({length:9}, ()=> new Set())
    const col = Array.from({length:9}, ()=> new Set())
    const boxes = Array.from({length:9}, ()=> new Set())

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {

            //iterate each cell
            let val  = board[r][c]

            //if empty cell continue
            if(val==='.') continue



            // find indexes of 3*3 grid based of row and col
            let boxIndex = Math.floor(r/3) * 3 + Math.floor(c/3)
            console.log(boxIndex)

            //boxIOndex is for 3*3 grid and r and c for row and col . Box index is calculated based on r and c
            //why is it false if boxIndex has value?
            //because

            //if val already exisits in a row the i j belongs to or col or in a 3X3 grid return false
            if(row[r].has(val) || col[c].has(val) || boxes[boxIndex].has(val)){
                return false
            }

            row[r].add(val)
            col[c].add(val)
            boxes[boxIndex].add(val)

        }

    }

}