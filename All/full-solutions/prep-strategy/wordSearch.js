var exist = function(board, word) {

    let R= board.length
    let C = board[0].length
    let visited = new Set()

    function dfs(r,c, index){

        //missed this last time
        if(index===word.length){
            return true
        }

        if(r<0||r>=R||c<0||c>=C||board[r][c]!=word[index]||visited.has(`${r}-${c}`)){
            return false
        }

        console.log('word index match' , board[r][c] , word[index] , index ,word.length)

        //mark visited
        visited.add(`${r}-${c}`)

       if(
        dfs(r,c+1, index+1)||
        dfs(r,c-1 , index+1)||
        dfs(r+1, c , index+1)||
        dfs(r-1, c, index+1)
    ){
           return  true
       }


        //unmark visited
        visited.delete(`${r}-${c}`)
        //return false always and add conditon to return true
        return false
    }

    for(let r=0  ; r<R ; r++){
        for(let c = 0 ; c < C ; c++){
            if(dfs(r,c, 0) ===true){
                return true
            }
        }
    }


    return false

};


let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"

console.log(exist(board,word))