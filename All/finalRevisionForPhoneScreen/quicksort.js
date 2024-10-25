function quicksort(nums , low=0 , high=nums.length-1){

	if(low<high){
		let pivot = partition(nums,low,high)
		quicksort(nums, low, pivot-1)
		quicksort(nums,pivot+1, high)
	}
	return nums
}

function partition(nums,low,high){
	let i = low 
	let pivot = nums[high]
	for(let j = low; j<high; j++){
		if(nums[j]<pivot){
			[nums[i],nums[j]] = [nums[j],nums[i]]
			i++
		}
	}
	[nums[i],nums[high]] =[ nums[high] , nums[i ]]
	return i
}

// O(n) avg case ,  O(n^2) worst case  - Time complexity 
//O(1) space complexity