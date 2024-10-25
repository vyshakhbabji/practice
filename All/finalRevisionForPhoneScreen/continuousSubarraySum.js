/*
Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

A good subarray is a subarray where:

its length is at least two, and
the sum of the elements of the subarray is a multiple of k.
Note that:

A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

*/


var checkSubarraySum = function(nums, k) {
    let map = {}
    map[0] = -1 // this is becuase the first sum is already seen from the begining ,then we need a reference index 
    			//the entire subarray starting from index 0 has a sum that is a multiple of k.

    let sum = 0 
    for(let i = 0 ; i < nums.length ; i++){
    	sum+=nums[i]
    	if(k>0){
    		sum = sum%k 
    	}
    	if(sum in map){ //if sum is seen before 
    		if(i- map[sum]> 1) return true 
    	}else{
    		map[sum]=  i  // else add curIdx of sum to map 
     	}
    }
    return false 
};	

// Time complexity O(N) and O(min(n,k)) where n is number of elements in num and k is the divisor 