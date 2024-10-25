function nextPermutation(nums) {

    let i = nums.length-2
    while(i>=0){
        //find first decreasing element
        if(nums[i]<nums[i+1]) break
        i--
    }

    if(i<0){
        return nums.reverse()
    }

    let j = nums.length-1
    while( i<j ){
        //find first element greater than nums[i]
        if(nums[i]<nums[j]) break
        j--
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]

    let l = i+1 , r = nums.length-1
    while(l<r){
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++
        r--
    }

    return nums


}

// Example usage:
let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums); // Output: [1, 3, 2]

nums = [3, 2, 1];
nextPermutation(nums);
console.log(nums); // Output: [1, 2, 3]

nums = [1, 1, 5];
nextPermutation(nums);
console.log(nums); // Output: [1, 5, 1]
