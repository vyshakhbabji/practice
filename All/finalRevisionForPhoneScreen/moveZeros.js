var moveZeroes = function(nums) {
    let idx = 0 
    for(let i = 0 ; i < nums.length ; i ++){
        if(nums[i]!==0){
            nums[idx]=nums[i]
            idx++
        }
    }
    while(idx<nums.length){
        nums[idx]=0
        idx++
    }
    return nums
};

Time complexity: O(n), where n is the length of the nums array.
Space complexity: O(1), since the algorithm uses only constant extra space.