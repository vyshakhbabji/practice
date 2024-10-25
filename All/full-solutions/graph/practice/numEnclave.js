function numEnclaves(grid) {
    // Implement your solution here
    const R = grid.length
    const C = grid[0].length

    let visited  = new Set()


    for(let i=0;i<C; i++){
      if(grid[0][i]===1){
          dfs(0,i)
      }
      if(grid[R-1][i] === 1){
          dfs(R-1, i)
      }
    }

    for(let i=0;i<R; i++){
        if(grid[i][0]===1){
            dfs(i,0 )
        }
        if(grid[i][C-1] === 1){
            dfs(i,C-1)
        }
    }




    function dfs (r,c){
        if(r<0||r>R||c<0||c>C||grid[r][c]===0){
            return
        }

        if(grid[r][c] === 1){
            grid[r][c] = 0
            dfs(r+1, c)
            dfs(r,c+1)
            dfs(r-1,c)
            dfs(r,c-1)

        }
    }

    console.log(grid)

    let count=0

    for(let i = 0 ; i <R ; i++){
        for (let j = 0; j < C; j++) {
            if(grid[i][j]===1){
                count++
            }
        }
    }



    return count


}

// Sample input
// const grid = [
//     [0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 1, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 1, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0]
// ];

const grid = [[0,1,1,0],
                     [0,0,1,0],
                     [0,0,1,0],
                     [0,0,0,0]]


// Expected output
const expectedOutput = 3;  // The number of land cells that cannot walk off the boundary

// Function call to test your code
const result = numEnclaves(grid);
console.log(result);  // Should print 3 if your implementation is correct
