function monotonic(nums){

    let len = nums.length
    let isIncreasing = nums[0]<=nums[len-1]


    for(let i=1;i<nums.length; i++){
        if(isIncreasing){
            if(nums[i-1]>nums[i]) return false
        }else{
            if(nums[i-1]<nums[i]) return false
        }
    }
    return true

}

let nums = [1,3,2]
console.log(monotonic(nums))

console.log(monotonic([5, 4, 3, 2, 1, 6]));