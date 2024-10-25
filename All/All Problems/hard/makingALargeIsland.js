/*
827. Making A Large Island

You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.

Return the size of the largest island in grid after applying this operation.

An island is a 4-directionally connected group of 1s.

 

Example 1:

Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
Example 2:

Input: grid = [[1,1],[1,0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
Example 3:

Input: grid = [[1,1],[1,1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 4.
*/



function makingALargeIsland(grid){

	let R = grid.length
	let C = grid[0].length

	let islandId = 2 
	let islandMap= {} // {id : size}
	 let dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
 	
 	for(let r = 0 ; r < R ; r ++){
 		for(let c = 0 ; c < C ; c++){
 			 if(grid[r][c] === 1 ){
 			 	size = dfs(r,c,islandId)
 			 	islandMap[islandId] = size
 			 	islandId++
 			 }
 		}
 	}


 	function dfs(r,c,islandId){
 		if(r>=R || r<0 || c>=C || c<0 ||grid[r][c]!==1) return 0 
 		grid[r][c] = islandId
 		let size = 1 
 		for(let [dr,dc] of dir){
 			let nr = dr+r , nc= dc+c 
 			size+=dfs(nr,nc, islandId)
 		}
 		return size 
 	}


 	let maxIslandSize = Math.max(...Object.values(islandMap))


 	for(let r = 0 ; r< R ; r++){
 		for(let c = 0 ; c< C ; c++){
 			if(grid[r][c]===0){ // u need to choose cells which are 0  to turn to 1 and check if max size changes 


 				const neiIds = new Set()
 				let potentialSize = 1

 				for(let [dr,dc] of dir){
 					let nr = dr+r , nc =dc+c 

 					//check boundry 
 					if(nr>=0 && nr<R && nc>=0 && nc<C && grid[nr][nc]>1 && !neiIds.has(grid[nr][nc])){
 						 neiIds.add(grid[nr][nc])
 						 potentialSize+=islandMap[grid[nr][nc]]
 					}
 				}

 				maxIslandSize = Math.max(maxIslandSize , potentialSize)






 			}

 		}
 	}




 	return maxIslandSize

}












































