//given methods  :
// function GridMaster() {
// this.canMove(direction)
// this.move(direction)
//this.isTarget()
// }

//char direction UDLR

//start is 0 0
// let direction = rc
//U  -1 0
//D   1 0
//L   0 -1
//R   0 1

//we donot know the grid dimention ,  we only know that we can ask queries to  grid master to figure out the moves
// so we need ability to backtrack which is push explore pop

//question asks to find target cell and then mion distance to target cell
//i can explore cells and ask gridmaster if its a target cell or not

// so dir cna be desingned as

let directions  = [
    {dir: 'U', rev: 'D', move:[-1,0]},
    {dir: 'D', rev: 'U', move:[1, 0]},
    {dir: 'L', rev: 'R', move:[0,-1]},
    {dir: 'R' ,rev: 'L', move:[0, 1]}
]
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