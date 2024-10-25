var uniquePathsWithObstacles = function(grid) {
    let R = grid.length
    let C = grid[0].length

    // 1 is obstacle  or is empty path

    //if begining is obstacle then no path
    if(grid[0][0] === 1 ) return 0

    //set initial path to 1
    grid[0][0] = 1

    //set first row to 1 as robot can move horizontally . if obstacle found make it 0
    for(let i = 1 ; i < C ; i ++){
        //current cell is 0 and prev cell is 1 , set cur cell to 1  else 0 ( this means  prev cell was 0 we changed it to 1 to mqke the path
        grid[0][i] = (grid[0][i] === 0  && grid[0][i-1] ===1)  ?  1: 0
    }

    //lets do the same for col
    for(let i = 1 ; i < R ; i++){
        grid[i][0] = (grid [i][0]=== 0 && grid[i-1][0]  === 1) ? 1 : 0
    }

    //now rest of the cells
    for(let i = 1; i < R ; i++){
        for(let j=1 ; j < C ; j ++ ){
            if(grid[i][j]===0) { //if current grid is 0
                //check left and top
                grid[i][j] =  grid[i-1][j] + grid [i][j-1]
            }else{
                grid[i][j] = 0
            }
        }
    }

    return grid[R-1][C-1] //last cell

};


// Example dry run

// Input: obstacleGrid = [[0,0,0],
//                        [0,1,0],
//                        [0,0,0]]

/*
      //FILL ROWS TO 1 OR 0
       [1,1,1],
        [0,1,0],
        [0,0,0]

        //FILL COLUMNS TO 1 OR 0
        [1,1,1]
        [1,1,0]
        [1,0,0]

        //FILL REMAINING CELLS// 1 OR 0
        [1,1,1]
        [1,0,1]
        [1,1,2]
 */