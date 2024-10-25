var subarraySum = function(nums, k) {

    let count  = 0
    let map = {}
    map[0]=1
    let sum = 0

    for(let i = 0 ; i< nums.length;i++){
        sum+=nums[i]
        if(sum-k in map){
            count+=map[sum-k]
        }
        map[sum]= (map[sum]||0)+1
    }
    return count
};