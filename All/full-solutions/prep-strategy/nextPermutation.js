var nextPermutation = function(nums) {
    let i = nums.length-2
    while(i>=0){
        // find nums[i] < num[i+1]
        if(nums[i]<nums[i+1]) break
        i--
    }
    if(i<0) return nums.reverse()
    let j = nums.length-1
    while(i<j){
        //find nums[j] < nums[i]
        if(nums[i] < nums[j]){
            break
        }
        j--
    }
    //swap these 2 numbers
    [nums[i], nums[j]] = [nums[j], nums[i]]

    //reverse
    let l = i+1 , r = nums.length-1
    while(l<r){
        [nums[l], nums[r] ] = [nums[r] , nums[l]]
        l++
        r--
    }
    return nums
};

console.log(nextPermutation([5,1,1]))