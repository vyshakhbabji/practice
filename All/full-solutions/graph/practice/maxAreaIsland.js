
//Find max area of island - island with max area

function maxAreaOfIsland(grid) {

    const R = grid.length
    const C  = grid[0].length

    if(R<0) return 0

    let visited = new Set()
    let maxArea = 0

    for(let i=0;i<R;i++){
        for(let j = 0 ; j< C ; j++){
            if(grid[i][j]===1 && !visited.has(`${i},${j}`)){
                maxArea= Math.max( dfs(i,j) , maxArea)
                console.log('maxArea', maxArea)
            }

        }
    }


    function dfs(r,c){

        if(r<0 || r>=R || c<0 || c>=C || grid[r][c] === 0 || visited.has(`${r},${c}`)){
            return 0
        }
        let area = 1
        if(grid[r][c] === 1){ // is this needed?  if(grid[r][c] === 1) is already checked in the if condition above so this is not needed
            visited.add(`${r},${c}`)
            area+= dfs(r+1, c)
            area+=dfs(r,c+1)
            area+=dfs(r-1,c)
            area+=dfs(r,c-1)
        }

        return area

    }

    return maxArea

}

// Sample input
const grid =  [
    [0,1,1,0,1],
    [1,0,1,0,1],
    [0,1,1,0,1],
    [0,1,0,0,1]
]

// Expected output
const expectedOutput = 5;  // The largest island has an area of 5

// Function call to test your code
const result = maxAreaOfIsland(grid);
console.log(result);  // Should print 5 if your implementation is correct
