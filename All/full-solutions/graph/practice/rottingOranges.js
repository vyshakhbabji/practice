function orangesRotting(grid) {

    //this is classic BFS problem where we need to find the shortest path from rotten oranges to all the fresh oranges and simultaneously check if there are any fresh oranges left
    //if there are no fresh oranges left then return the time taken to rot all the oranges

    let freshOranges = 0
    let q = []
    let R = grid.length
    let  C = grid[0].length
    let dir = [[1,0],[0,1], [0,-1], [-1,0]]
    let min=0

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (grid[i][j] === 2) {
                q.push([i, j])
            } else if (grid[i][j] === 1) {
                freshOranges++
            }
        }
    }

    while(q.length>0  && freshOranges>0){
        let len = q.length
        console.log('len', len)
        min++
        for (let i = 0; i < len; i++) {
            const [r,c]  = q.shift()

            for(const [dr,dc] of dir){
                nr = dr+r
                nc = dc+c
                if(nr>=0 && nr<R && nc>=0 && nc<C && grid[nr][nc] ===1){
                    grid[nr][nc]=2
                    freshOranges--
                    q.push([nr,nc])
                }
            }
            console.log('min',min)
        }
    }

    return freshOranges===0? min : -1
}

// Sample input
const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];

// Expected output
const expectedOutput = 4;

// Function call to test your code
const result = orangesRotting(grid);
console.log(result);  // Should print 4 if your implementation is correct
