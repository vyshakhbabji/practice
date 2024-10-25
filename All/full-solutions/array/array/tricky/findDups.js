function findDuplicates(nums) {
    //all numbers are betwenn 1... nums.len-1

    // trick is to use the negation as the marker of number which is index ( instead of hash/set use index)

    let dup = []

    for(let i = 0 ; i < nums.length; i ++){
     
    }

    return dup

}

// Example input
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums)); // Output should be [2, 3]

// Additional test cases
const nums2 = [1, 1, 2];
console.log(findDuplicates(nums2)); // Output should be [1]

const nums3 = [1];
console.log(findDuplicates(nums3)); // Output should be []

const nums4 = [2, 2, 3, 3, 4, 4, 5, 5];
console.log(findDuplicates(nums4)); // Output should be [2, 3, 4, 5]
