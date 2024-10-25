var subarraySum = function(nums, k) {

    //return total number of subarrays sum equal k
    let count = 0
    let map = {}
    map[0]=1 // keep track of counts
    let cursum = 0
    for(let i = 0 ; i < nums.length; i++){
        console.log(map)
        cursum += nums[i]
        if(cursum-k in map){
            count+= map[cursum-k] // count should be updated from map not by incrementing count
        }
        map[cursum] = (map[cursum]||0)+ 1 // increment the cursum
    }


    return count
};


let input = [1,-1,0]
console.log(subarraySum(input,0))