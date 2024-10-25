/*
You are given a 2D grid consisting of '1's (land) and '0's (water). An island is formed by connecting adjacent '1's vertically or horizontally. You need to find the total number of distinct islands in the grid.

An island is considered distinct if it is completely surrounded by water and there are no other islands connected to it.

grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]


Rephrase Q : 
1. connected 1 is island 
2. conencted 0 is water 
3. vertical and horizontal connection forms island 
4. find total distinct island 
5. 3 islands in total 
6. shapes are different so 3 distinct 


Approach : 
1. this is a typical graph problem - which i think can be solved using dfs . Dfs becuase i need to explore all cells and find island and island shapes as well 
2. i need to keep shape of each island so i can compare the shape when i visit other islands as well . if its the same , keep the count as is , different - increment the count 
3. run typical dfs starting from first found island while looping though grid  and visited set 
4. caputre the shape and caluclate it ,  its  i,j i0,j0 where i j will be row col and i0j0 would be abs reference for the shapre of the islad 
5, keep a track of map for shpaes , if the shape is foind in the map dont increment the counter , if not increment the counter 
6. return the count  


TIME COMPLEXITY : o(n*m) 
Space Complexity : O(n*m)

*/


function distinctIsland(grid){
	let R = grid.length
	let C =grid[0].length
	let visited = new Set()
	let distinct = new Set()

	for(let r = 0 ; r < R ; r++){
		for(let c = 0 ; c<C ; c++){
			if(grid[r][c]==="1" && !visited.has(`${r}-${c}`)){
				let shape= []
				dfs(r,c , r,c , shape)
				let transformedShape= JSON.stringify(shape)
				if(!distinct.has(transformedShape)){
					distinct.add(transformedShape)
				}

			}
		}
	}

	function dfs(r,c,r0,c0,shape){

		if(r>=R ||r <0 ||c>=C ||c<0 || grid[r][c]==="0" || visited.has(`${r}-${c}`)) return 

		visited.add(`${r}-${c}`)

	    // Record the relative position for the shape of the island
    	shape.push([r - r0, c - c0]);

	    // Recursively call dfs in all four directions
	    dfs(r + 1, c, r0, c0, shape); // Down
	    dfs(r - 1, c, r0, c0, shape); // Up
	    dfs(r, c + 1, r0, c0, shape); // Right
	    dfs(r, c - 1, r0, c0, shape); // Left
	}	




	return distinct.size
}


























