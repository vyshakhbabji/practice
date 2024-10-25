var hasPath = function(maze, start, destination) {

    let R= maze.length
    let C= maze[0].length
    let q=[]
    q.push(start)
    let visited = new Set()
    visited.add(start.toString())
    let dir = [[0,1] ,[1,0],[0,-1],[-1,0]]

    while(q.length>0){
        let [r,c] = q.shift()

        if(r===destination[0]&&c ===destination[1]) return true


        for(let[dr,dc] of dir){
            let nr = r , nc = c
            while(nr>=0 && nr<R && nc>=0 &&nc<C && maze[nr][nc]===0){
                nr+=dr
                nc+=dc
            }
            nr-=dr
            nc-=dc

            if(!visited.has([nr,nc].toString())){
                visited.add([nr,nc].toString())
                q.push([nr,nc])
            }

        }
    }
    return  false
};