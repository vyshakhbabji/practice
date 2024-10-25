function wallsAndGates(rooms) {
    // Implement your solution here
    const R =  rooms.length
    const C = rooms[0].length
    let dir = [[1,0],[0,1], [0,-1], [-1,0]]
    let q   = []

    for (let i= 0 ;  i < R ; i ++){
        for(let j = 0 ; j < C ; j ++){
            if(rooms[i][j] === 0 ){
                q.push([i,j]) // start from the gate simultaneosuly so shortest deistnace isa updated
            }
        }
    }

    let dis = 0
    while(q.length>0) {
        let len = q.length
        dis ++
        for (let i = 0; i < len; i++) {
            let [r, c] = q.shift()
            for (const [dr, dc] of dir) {
                let nr = dr + r
                let nc = dc + c
                if (nr >= 0 && nr < R && nc >= 0 && nc < C && rooms[nr][nc] === 2147483647) {
                    rooms[nr][nc] = dis
                    q.push([nr,nc])
                }
            }
        }
    }

}

// Sample input
const rooms = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647]
];

// Expected output
const expectedOutput = [
    [3, -1, 0, 1],
    [2, 2, 1, -1],
    [1, -1, 2, -1],
    [0, -1, 3, 4]
];

// Function call to test your code
wallsAndGates(rooms);
console.log(rooms);  // Should print the expected output grid if your implementation is correct
