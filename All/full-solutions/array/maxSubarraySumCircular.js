function maxSubarraySumCircular(nums) {

    const  n = nums.length

    function kadaneMax(arr){
         let runningSum  = arr[0] , maxSum = arr[0]

        for(let i =1; i< arr.length ; i++){
            runningSum  = Math.max(arr[i],runningSum+arr[i])
            maxSum = Math.max(maxSum, runningSum)
        }
        return maxSum
    }

    function kadaneMin(arr){
        let runningSum = arr[0] , minGlobal = arr[0]
        for(let i =1; i< arr.length ; i++){
            runningSum  = Math.min(arr[i],runningSum+arr[i])
            minGlobal = Math.min(minGlobal, runningSum)
        }
        return minGlobal
    }


    const maxKadane = kadaneMax(nums)
    const minKadane = kadaneMin(nums)
    const totalSum = nums.reduce((a,b)=>a+b,0)

    console.log(maxKadane)
    console.log(minKadane)
    console.log(totalSum)


    //if all elements in array are negative
    if(totalSum===minKadane){
        return maxKadane
    }


    return Math.max(maxKadane, totalSum-minKadane)

}

// Example usage:
let nums = [1, -2, 3, -2];
console.log(maxSubarraySumCircular(nums)); // Output: 3
