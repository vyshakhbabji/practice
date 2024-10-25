function makingLargeIsland(grid){

	// identify all islands and thier sizes ...  assign id starting 2,3,.... 
	// store it in the map 
	//capture max size
	//choose only cells with 0 and try exploring if any of em increase the max size by recalculating the size 

	let R = grid.length
	let C = grid[0].length

	let id = 2 
	let idmap = {} /// { id: area }

	for(let r = 0 ; r < R ; r++){
		for(let c = 0 ; c < C ; c++){
			if(grid[r][c]===1){
				let area = dfs(r, c , id)
				idmap[id] = area 
				id++
			}
		}
	}

	function dfs(r, c, id){
		if() return 0 // not in boundry return 0
		grid[r][c] = id
		let size = 1
		for(let [dr,dc] of dir){
			let nr = dr +r , nc = dc+c 
			//if in boundry run dfs on them
			if() {
				size+= dfs(nr,nc, id)
			} 
		}
		return size 
	}


	let maxSize = Math.max(...Object.values(idmap))

	for(let r = 0 ; r <R ;r++){
		for(let c=0 ; c<C ; c++){

			if(grid[r][c] === 0 ){
				let potentialSize = 1
				let neiIds = new Set 

				for(let [dr,dc] of dir ){
					let nr  = dr + r , nc = dc+ c 
					let id  = grid[nr][nc]
					//if in boundry  and not in nei.has(id)
					if(){
						neiIds.add(id)
						potentialSize+=idmap[id]
					}
				}


				maxSize = Math.max(maxSize,potentialSize)
			}
		}
	}

	return maxSize

}