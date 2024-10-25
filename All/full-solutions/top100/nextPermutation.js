function nextPermutation(nums) {

    let i = nums.length-2
    while(i>=0){
        //find  nums[i] strictly lesser than nums[i+1]
        if(nums[i]<nums[i+1]){
            break
        }
        i--
    }

    console.log('i is ', i)

    if(i<0){
        nums.reverse()
        return  nums
    }

    let j = nums.length-1
    while(j>i){
        //find element  greater nums[i]  starting right to left unitl i
        if(nums[i]<nums[j]){
            break
        }
        j--
    }

    //swap

    [nums[i],nums[j]] = [nums[j] , nums[i]]

    let l = i+1 , r = nums.length-1
    while(l<r){
        [nums[l],nums[r]] = [nums[r] , nums[l]]
        l++
        r--
    }

    return nums



}

// Example usage:
let nums = [4, 1, 2, 3, 1];
nextPermutation(nums);
console.log(nums); // Output: [4, 1, 3, 1, 2]



//
// let nums = [4,1,2,3,1]
// console.log(nextPermutation(nums)) // Output: [1,3,2]

let nums2 = [3,2,1]
console.log(nextPermutation(nums2)) // Output: [1,2,3]
