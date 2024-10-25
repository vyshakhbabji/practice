var checkSubarraySum = function(nums, k) {
    let map = {} //map will contain sum and the index it was previously seen
    map[0]=-1

    let cursum = 0
    for(let i = 0 ; i < nums.length ; i ++){
        cursum+=nums[i]
        //check if cursum is multiple of k
        if(k>0){
            cursum = cursum% k
        }
        //if the same sum was seen before
        if(cursum in map ){
                if( i - map[cursum] > 1 ) return true // this is important, we need to check if the subarray has more than 1 element
        }else{
            map[cursum] = i
        }
    }
    return false
};

console.log(checkSubarraySum([23, 2, 4, 6, 7],6)) //true
console.log(checkSubarraySum([23, 2, 6, 4, 7],6)) //true
console.log(checkSubarraySum([23, 2, 6, 4, 7],13)) //false