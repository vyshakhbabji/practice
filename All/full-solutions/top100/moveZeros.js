var moveZeroes = function(nums) {

    let index = 0
    for(let i = 0 ; i < nums.length;i++){
        if(nums[i]!=0){
            nums[index] = nums[i]
            index++
        }
    }
    while(index<nums.length){
        nums[index] = 0
        index++
    }

    return nums


};

// Time: O(n)
// Space: O(1)

let nums = [0,1,0,3,12]
console.log(moveZeroes(nums)) // [1,3,12,0,0]

let nums2 = [0]
console.log(moveZeroes(nums2)) // [0]

let nums3 = [1]
console.log(moveZeroes(nums3)) // [1]

