function nextPermutation(nums){
    let i = nums.length-2

    while(i>=0){
        if(nums[i] < nums[i+1])
            break
        i--
    }

    if(i<0){
        return nums.reverse()
    }

    let j = nums.length-1
    while(i<j){
        if(nums[i]<nums[j])
            break
        j--
    }

    [nums[i], nums[j] ] = [nums[j], nums[i]]

    let l = i+1 , r = nums.length-1

    while(l<r){
        [nums[l], nums[r] ] = [nums[r], nums[l]]
        l++
        r--
    }

    return nums

}