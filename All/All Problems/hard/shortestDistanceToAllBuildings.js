/*
317. Shortest Distance from All Buildings
Hard
Topics
Companies
You are given an m x n grid grid of values 0, 1, or 2, where:
* each 0 marks an empty land that you can pass by freely,
* each 1 marks a building that you cannot pass through, and
* each 2 marks an obstacle that you cannot pass through.
You want to build a house on an empty land that reaches all buildings in the shortest total travel distance. You can only move up, down, left, and right.
Return the shortest travel distance for such a house. If it is not possible to build such a house according to the above rules, return -1.
The total travel distance is the sum of the distances between the houses of the friends and the meeting point.
The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.
*/

function shortestDistance(grid){

	let R = grid.length
	let C = grid[0].length
	let distance = Array(R).fill().map(()=>Array(C).fill(0))
	let reach  = Array(R).fill().map(()=>Array(C).fill(0))
	let totalBuildings = 0 
 let dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
	for(let r = 0 ; r <R ; r++){
		for(let c = 0 ;  c < C ; c++){
			if(grid[r][c]===1 ){
				totalBuildings++
				bfs(r,c)
			}
		}
	}


	function bfs(row,col){
		let q  = []
		q.push([row,col ,0 ]) // r,c, dist 
		let visited = new Set()
		visited.add([`${row}-${col}`])
		while(q.length>0){
			let len = q.length
			let [r,c,dist] = q.shift()

			for(let [dr,dc] of dir){
				let nr = dr+r , nc = dc+c 
				if(nr>=0 &&nr<R &&nc>=0 &&nc<C && grid[nr][nc]===0 && !visited.has(`${nr}-${nc}`)){
					visited.add(`${nr}-${nc}`)
					let newDistance = dist+1
					distance[nr][nc]+=newDistance
					reach[nr][nc]++
					q.push([nr,nc,newDistance])
				}

			}
		}
	}


	let res = Infinity

	for(let r = 0 ; r<R ; r++){
		for(let c = 0 ; c<C ; c++){
			if(grid[r][c] ===0 && reach[r][c]=== totalBuildings){
				res = Math.min(res, distance[r][c])
			}
		}
	}
	return res === Infinity? -1: res 


}

















