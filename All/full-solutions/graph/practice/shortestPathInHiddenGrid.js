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

// Directions and their opposites
const directions = [
    { dir: 'U', rev: 'D', delta: [-1, 0] },
    { dir: 'D', rev: 'U', delta: [1, 0] },
    { dir: 'L', rev: 'R', delta: [0, -1] },
    { dir: 'R', rev: 'L', delta: [0, 1] }
];
var findShortestPath = function(master) {
    let grid = {}
    let start = '0,0'
    grid[start] = {target:false}

    dfs(0,0)
    function dfs(r,c){
        //push, explore, backtrack
        for(let {dir,rev,move} of directions){
            let [dr,dc] = move
            let nr = dr+r , nc = dc+c
            let newPos = `${nr},${nc}`
            if(!(newPos in grid) && master.canMove(dir)){
                master.move(dir)
                grid[newPos] = {target: master.isTarget()}
                dfs(nr,nc)
                master.move(rev)
            }
        }
    }

    let q = [[0,0,0]]
    let visited = new Set()
    visited.add(start)

    while(q.length>0){
        let len = q.length
        let [r,c,steps] = q.shift()
        let pos = `${r},${c}`
        if(grid[pos].target === true) return steps
        for(let {move} of directions){
            let [dr,dc] = move
            let nr = dr+r , nc= dc+c
            let newPos = `${nr},${nc}`
            if( (newPos in grid) && !visited.has(newPos) ){
                q.push([nr,nc , steps+1])
                visited.add(newPos)
            }
        }
    }
    return -1
};