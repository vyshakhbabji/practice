function continousSubarraySum(nums,k){

    let res = []

    let sum = 0

    if(k===0) {
        for(let i=0 ; i < nums.length-1 ; i++){
            if(nums[i]===0 && nums[i+1] === 0 ) return true
        }
        return  false
    }

    for(let i = 0; i<nums.length;i++){
        sum = nums[i]
        for(let j = i+1; j<nums.length;j++){
            sum+=nums[j]
            if(sum%k===0 && j-i >=1 ){
                return true
            }
        }
    }

    return false

}

const arr  = [23,2,4,6,7] , k = 6
console.log(continousSubarraySum(arr,k))



function checkSubarraySum(nums, k) {
    const prefixSumMap = new Map();
    prefixSumMap.set(0, -1); // To handle subarray starting from index 0

    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        let remainder = prefixSum % k;

        // Adjust negative remainders to be positive
        if (remainder < 0) {
            remainder += k;
        }

        if (prefixSumMap.has(remainder)) {
            if (i - prefixSumMap.get(remainder) > 1) {
                return true;
            }
        } else {
            prefixSumMap.set(remainder, i);
        }
    }

    return false;
}