
//return the length of shortest clear path
var shortestPathBinaryMatrix = function(grid) {
    let R= grid.length , C = grid[0].length
    if(grid[0][0]!==0) return -1
    let dir = [[0,1],[0,-1], [1,0] , [-1,0],
        [1,1],[-1,-1], [1,-1],[-1,1]]
    let q =[]
    q.push([0,0,1])
    while(q.length>0){
        let [r,c,len] = q.shift()
        if(r===R-1 && c===C-1) return len
        for(let [dr,dc]of dir){
            let nr = r+dr , nc=c+dc
            if(nr>=0&&nr<R && nc>=0 &&nc<C &&grid[nr][nc]===0){
                q.push([nr,nc,len+1])
                grid[nr][nc]=1
            }

        }
    }
    return -1
};

console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]))