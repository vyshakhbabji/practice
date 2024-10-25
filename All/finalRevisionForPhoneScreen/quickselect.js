function quickSelect(nums , k , findLargest=true){

	let low = 0 , high = nums.length-1 
    let target = findLargest ? nums.length - k : k - 1;


	while(low<=high){
		let pivot = partition(nums,low,high)
		if(pivot === target){
			return nums[pivot]
		}
		else if(pivot<target){
			low = pivot+1
		}else{
			high = pivot-1
		}
	}
	return -1 
}

function partition(nums, low, high){

	let pivot = nums[high]
	let i = low

	for(let j = low ; j < high ; j ++  ){
		if(nums[j] < pivot){
			[nums[i], nums[j]] = [nums[j], nums[i]]
			i++
		}
	}

	[nums[i], nums[high]]  = [nums[high] , nums[i]]
	return i 
}


// O(n) avg case ,  O(n^2) worst case  - Time complexity 
//O(1) space complexity