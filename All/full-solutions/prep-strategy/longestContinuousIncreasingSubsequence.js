var findLengthOfLCIS = function(nums) {
    if(nums.length === 0) return 0
    let maxLen = 1
    let curlen = 1
    for(let i = 1 ; i < nums.length; i++){
        if(nums[i]>nums[i-1]){
            curlen++
            maxLen=Math.max(curlen,maxLen)
        }
        else{
            curlen = 1
        }
    }
    return maxLen
}