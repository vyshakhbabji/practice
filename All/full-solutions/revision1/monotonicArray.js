function monotonicArray(nums) {
    let increasing = false
    let decreasing = false
    for(let i=1 ; i<nums.length; i++){
        if(nums[i-1]<nums[i]){
            increasing = true
        }else if( nums[i-1]>nums[i]){
            decreasing = true
        }
    }

    return !(increasing && decreasing)
}