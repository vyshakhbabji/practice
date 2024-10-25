/*
Question: Shortest Path in a Binary Matrix with Path Tracking
You are given an n x m binary matrix grid where:

Each cell contains a value of either 0 or 1.
0 represents a passable cell.
1 represents an impassable or blocked cell.
Your task is to find the shortest path from the top-left corner of the matrix (grid[0][0]) to the bottom-right corner of the matrix (grid[n-1][m-1]).

The shortest path is defined as the minimum number of cells you must traverse to reach the destination from the start. You can move in 8 possible directions (up, down, left, right, and all 4 diagonals).

Requirements:
Return the Length of the shortest path.
Return the Actual Path taken as a list of coordinates [x, y], starting from the top-left corner and ending at the bottom-right corner.
If no such path exists, return -1 for the length and an empty list for the path.
Constraints:
The matrix grid is guaranteed to have at least 1 row and 1 column (1 <= n, m <= 100).
grid[0][0] and grid[n-1][m-1] are always 0 (i.e., passable).

Input:
grid = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 0, 0]
]

Output:
Shortest Path Length: 4
Path: [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2]]


Input:
grid = [
  [0, 0, 1],
  [1, 0, 1],
  [1, 0, 0]
]

Output:
Shortest Path Length: 5
Path: [[0, 0], [0, 1], [1, 1], [2, 1], [2, 2]]

/*

Vyshakh 
-------

The question : 
Find shortest path 
Find the path of the shortest path

space complexity = O(n*m)
time complexity  = O(N*M)	
*/

function shortestPathInBinaryMatrix(grid){
	let R = gird.length
	let C = grid[0].length 

	let q = []
	if(grid[0][0]===1 || grid[R-1][C-1]===1) return -1 
	q.push([0,0,0 ])
	grid[0][0] = 1 
	let dir = [] //8 directions 

	//path variabale
	let parent = Array.fill({length:R}, ()=>Array(C).fill(null)); 
	parent[0][0]=[-1,-1] // starting point 


	while(q.length > 0){
		let len = q.length
		let [r,c,dist] = q.shift()
		if(r ===R-1 && c === C-1){
			let path = []
			while(r!=-1 && c!=-1){
				path.push([r,c])
				[r,c] = parent[r,c]
			}
			path.reverse()
			return dist 
		}
		for(let [dr,dc] of dir){
			let nr = dr+r 
			let nc = dc+c
			if(nr>=0 && nr<R &&nc>=0 && nc<C && grid[r][c]===0){
				grid[nr][nc]=1
				q.push([nr,nc,dist+1])
				parent[nr][nc] = [r,c]
			}
		}
	}
	return -1 
}















