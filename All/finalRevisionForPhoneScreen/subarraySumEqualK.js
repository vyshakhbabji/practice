
//-107 <= k <= 107
//-1000 <= nums[i] <= 1000

//total number of subarrays whose sum equal to k 

var subarraySum = function(nums, k) {

    let map = {}
    map[0]=1

    let sum = 0 
    let count = 0 
    for(let i = 0 ; i < nums.length; i ++){
    	sum+=nums[i]
    	if(sum-k in map){
    		count+=map[sum-k]
    	}
    	map[sum] = (map[sum]||0)+1
    }
    return count 
};


// k>0 and nums[i] > 0

var subarraySum2 = function(nums, k){
	let count = 0 

	let sum = 0 
	let l = 0 
	for(let r = 0 ; r < nums.length ; r++){
		sum+=nums[r]
		
		while(sum>k && l<=r){ // make sure left goes until right 
			sum-=nums[l]
			l++
		}

		if(sum === k) count++
	}
	return count 
}


