/*
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


/*
----Vyshakh 

Time complexity = O(M*N)
Space = O(M*N)



*/


function makingLargeIsland(grid){

	let R = grid.length
	let C = grid[0].length
	let islandMap = {} // {2: 4 , 3: 5 }
	let id = 2 

	let dir = [[], [],[],[]] // directions --4 

	for(let r = 0 ; r < R; r++){
		for(let c = 0 ; c< C ; c++){

			if(grid[r][c]===1){
				size = dfs(r,c,id )
				islandMap[id, size]
				id++ // 2,3, .... 

			}
		}
	}


	//identify , calculate area and mark each island

	function dfs(r,c , id){
		//check boundry of the r and c 
		
		let size = 1

		if(checkBoundry(r,c)){
			return 0
		}	

   		grid[r][c]=id

		for(let [dr,dc]of dir){
			let nr = dr+r , nc = dc+c
			size += dfs(nr,nc )
		}
		return size 
	}


	// see if changing 0 to 1 for 1 cell increases the area of the island 

	let maxArea = Math.max(Object.values(...islandMap))

	
	for(let r = 0 ; r < R ; r++){
		for(let c = 0 ; c<C ; c++){
			if(grid[r][c] ==== 0){
				let visited  = new Set()
				let potentialSize = 1 
				for(let [dr,dc] of dir ){
					let nr = dr + r , nc = dc+c 
					//checkboudnry 
					if(checkBoundry()){
						let checkId = grid[nr][nc]
						if(!visited.has(`${nr},${nc}`)){
							visited.add(`${nr},${nc}`)
							let area = islandMap[checkId] 
							potentialSize+=area
						}
					}
				}
			}
		}

		maxArea= Math.max(maxArea, potentialSize)
	}


	return maxArea

}







































