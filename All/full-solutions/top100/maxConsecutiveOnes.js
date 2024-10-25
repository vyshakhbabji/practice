var longestOnes = function(nums, k) {

    let r = 0 , l = 0
    let zeros = 0
    let maxLen = 0

    while(r < nums.length){

        if(nums[r]===0){
            zeros++
        }

        while(zeros>k && l<=r){
            if(nums[l] === 0){
                zeros--
            }
            l++
        }

        maxLen  = Math.max(maxLen, r-l+1)
        r++
    }

    return maxLen

};



const nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
console.log(longestOnes(nums, k)) // 10


const nums2 = [0,0,0,0] , k2 = 3
console.log(longestOnes(nums2,k2))