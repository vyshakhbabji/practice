var subarraySum = function(nums, k) {
    let count = 0
    let map = {} // {sum : count}
    map[0]=1
    let cursum = 0
    for(let i = 0 ; i< nums.length; i++){
        cursum+=nums[i]
        if((cursum-k) in map){
            count+=map[cursum-k]
        }else{
            map[i] = (map[cursum]||0) + 1 //asking for total number so always update count
        }
    }
    return  count

}