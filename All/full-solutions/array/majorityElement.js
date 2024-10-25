function majorityElement(nums) {

    //keep a track of the counts using counter
    let count = 0

    //choose the item that the coutner is counted for
    let candidate = nums[0]

    for(let  n of nums){

        if(count===0){
            candidate = n
        }

        count+= (n===candidate)? 1 : -1
    }

    return candidate

}

// Test cases
let nums1 = [3, 2, 3];
console.log(majorityElement(nums1)); // Output: 3

let nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2)); // Output: 2

let nums3 = [1];
console.log(majorityElement(nums3)); // Output: 1

let nums4 = [1, 1, 2, 2, 1];
console.log(majorityElement(nums4)); // Output: 1
