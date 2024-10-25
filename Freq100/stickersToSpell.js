function stickerToSpell(stickers , target){

 	/*
 	approach : 
 	1. memo with dfs 
 	2. create charFreqCount for stickers and target 
 	2. in dfs - break down the target into smaller targets by filling in each char from set of stickers 
 	3. this breaks down the problem into subproblems and in each recursion , target keeps becoming smaller 
 	4. now keep track of counts of how many stickers are consumed to build out the target 
 	5. while u explore the diff combinations , u keep min count of stickers consumed 
 	6. if target formation is completed return min res or if res is still ob value return -1 

 	*/

	let memo = {}

	function charFreqCount(s) {
		let map = {}
		for (let c of s) {
			map[c] = (map[c] || 0) + 1
		}
		return map
	}

	let stickersCount = stickers.map((s) => charFreqCount(s))

	function dfs(target) {
		if (target === "") return 0
		if (target in memo) return memo[target]
		let min = Infinity
		let targetCount = charFreqCount(target)

		for (let sticker of stickersCount) {
			if (!sticker[target[0]]) continue

			let remaining = 0
			let newTarget = ""
			for (let c in targetCount) {
				remaining = targetCount[c] - (sticker[c] || 0)

				if (remaining > 0) {
					newTarget += c.repeat(remaining)
				}
			}

			let res = dfs(newTarget)

			if (res !== -1)
				min = Math.min(min, res + 1)
		}

		memo[target] = min === Infinity ? -1 : min

		return memo[target]
	}


	return dfs(target)

}