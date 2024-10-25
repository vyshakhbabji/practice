class GridMaster {
    // Dummy methods to illustrate the concept. These should be provided.
    canMove(direction) {
        // Returns true if we can move in the given direction
    }

    move(direction) {
        // Moves in the given direction and returns true if move is successful
    }

    isTarget() {
        // Returns true if the current cell is the target
    }
}

//dir = U D L R
//move  - > move in dir
//isTarget -> true/false
//canMove -> true/false

const directions  = [
    {dir:'U' , rev: 'D' , delta: [-1,0]},
    {dir:'D' , rev: 'U' , delta: [1,0]},
    {dir:'L' , rev: 'R' , delta: [0,-1]},
    {dir:'R' , rev: 'L' , delta: [0,1]},
]

var findShortestPath = function(master) {
    //grid needs to be mapped out based on the move made from start
    let grid = new Map()
    let start  = '0,0'
    grid.set(start , {target:false})

    function dfs(r,c){
        for(let {dir,rev, delta} of directions){
            const nr = delta[0]+r
            const nc = delta[1]+c
            const newPos = `${nr},${nc}`
            if(!grid.has(newPos) && master.canMove(dir)){
                master.move(dir)
                grid.set(newPos, {target: master.isTarget()})
                dfs(nr,nc)
                master.move(rev)
            }

        }
    }

    dfs(0,0)

    const q = [[0,0,0]]
    const visited = new Set()
    visited.add(start)

    while(q.length>0){
        const [r,c, steps] = q.shift()
        const pos = `${r}${c}`
        if (grid.get(pos).target) return steps;
        for(const {delta} of directions){
            let nr = r+delta[0]
            let nc = c+delta[1]
            let newPos = `${nr},${nc}`
            if(grid.has(newPos) && !visited.has(newPos)){
                visited.add(newPos)
                q.push([nr,nc,steps+1])
            }
        }
    }

    return -1

};


