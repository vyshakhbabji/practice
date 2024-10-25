var check = function(nums) {
    let len = nums.length

    //check if array was sorted
    //check if array was rotated -> keep a counter - this should just be 1
    let count = 0

    //need a way to compare last element with first element
    // nums[len-1]<nums[0]

    for (let i = 0 ; i<nums.length-1; i++){
        if(nums[i]>nums[i+1]){
            count++
        }

        // one count is allowed
        if(count>1) return false
    }

    return nums[len-1]<nums[0] || count < 1

};

// Example input
const nums = [3, 4, 5, 1, 2];
console.log(check(nums)); // Output should be true

// Additional test cases
const nums2 = [2, 1, 3, 4];
console.log(check(nums2)); // Output should be false

const nums3 = [1, 2, 3];
console.log(check(nums3)); // Output should be true

const nums4 = [1, 1, 1];
console.log(check(nums4)); // Output should be true

const nums5 = [2, 1];
console.log(check(nums5)); // Output should be true