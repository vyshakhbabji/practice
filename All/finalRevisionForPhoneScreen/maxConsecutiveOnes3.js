var longestOnes = function(nums, k) {
    let zeros = 0
    let maxLen = 0 

    for(let r = 0 ; r < nums.length ; r++){
    	if(nums[r] === 0){
    		zeros++
    	} 
    	while(zeros>k){
    		if(nums[l]===0) zeros--
    		l++
    	}

    	maxLen = Math.max(maxLen , r-l+1)

    }
    return maxLen 
};