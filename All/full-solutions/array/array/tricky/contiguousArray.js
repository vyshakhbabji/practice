//Given a binary array nums, find the maximum length of a contiguous subarray with an equal number of 0s and 1s.


function findMaxLength(nums) {
   
    //for prefix sum problem inistalizing the array is important - as it could be a ref/ req for next element 
   


    // when u see the index where cursum exisits put it in the map with its index 
    // the continues len is captured for this using curlen and return maxlen when the cursum found 

    for (let i = 0 ; i < nums.length; i++){

       
    }


    return maxLen


}

// Example input
const nums = [0, 1];
console.log(findMaxLength(nums)); // Output should be 2

// Additional test cases
const nums2 = [0, 1, 0];
console.log(findMaxLength(nums2)); // Output should be 2

const nums3 = [0, 1, 1, 0, 1, 1, 1, 0];
console.log(findMaxLength(nums3)); // Output should be 4
