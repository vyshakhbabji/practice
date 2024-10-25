function wordSearch(grid , word){

    //do it again from scratch and see if u rememebr everything without forgetting anything

    let R = grid.length
    let C= grid[0].length

    let isVisited = new Set()
    let dir = [[0,1],[1,0],[0,-1],[-1,0]]

    for(let r = 0; r<R ; r++){
        for (let c = 0 ; c<C ; c++){
             let found = dfs(r,c , 0 )
             if(found === true) return true
        }
    }

    function dfs(r,c , index){

        console.log(grid[r][c] , word[index])

        if(index === word.length) return true

        if(r<0 || r>=R ||
           c<0 || c>=C ||
            grid[r][c]!=word[index] ||
            isVisited.has(`${r}-${c}`) ) {
            return false
        }



        isVisited.add(`${r}-${c}`)

        for(let [dr,dc] of dir){
            let nr = dr+r , nc = dc+c
            if(dfs(nr,nc , index+1) ) return true
        }

        isVisited.delete(`${r}-${c}`)

        return false

    }


    return false
}

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word ="ABFD"
console.log(wordSearch(board,word))
