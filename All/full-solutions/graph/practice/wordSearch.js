function wordSearch(board , word){

    const R = board.length
    const C = board[0].length
    const visited = new Set()
    const dir  = [[0,1],[0,-1], [-1,0], [1,0]]


    for(let i = 0 ; i<R ; i++){
        for(let j = 0 ; j< C ; j++){

            // if dfs returns  true ,return true immdeidatly
            if (dfs(i,j , 0)){
                return true
            }
        }
    }

    function dfs(r,c, index ){


        if(index === word.length){
            return true
        }

        //check range of r and c  ,  if out of bound return
        if( r>=R || r<0 ||
            c>=C || c< 0 ||
            visited.has(`${r},${c}`) ||
            board[r][c]!==word[index])  // if letter at board[r][c] == word at index
        {

            return false

        }

        //add r c to visted
        visited.add(`${r},${c}`)

        //explore all 4 directions
        for(let [dr,dc] of dir){
            let nr = dr+r , nc = dc+c
            if (dfs(nr, nc, index + 1)) {
                return true;
            }
        }

        //delete from visited and restore , make it ready for next search
        visited.delete(`${r},${c}`)


        return  false

    }

    return false
}

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word ="ABFA"
console.log(wordSearch(board,word))
