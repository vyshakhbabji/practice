function randomWithWeights(nums){
	let max = Math.max(...nums)
	for (let i = 0; i < nums.length; i++) {
	  if (nums[i] === target) {
	    indexes.push(i);
	  }
	}
	let rand = Math.floor(Math.random()*indexes.length)
	return indexes[rand]
}