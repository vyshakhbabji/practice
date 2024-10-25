function longestConsecutive(nums){
    let set  = new Set(nums)
    let longest = 0
    for(n of nums){
        if(!set.has(n-1)){
            let len =1
            while (set.has(n+len)){
                    len++
            }

            longest = Math.max(longest,len)
        }
    }

    return longest
}

// Example input
const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // Output should be 4

// Additional test cases
const nums2 = [0, -1];
console.log(longestConsecutive(nums2)); // Output should be 2

const nums3 = [1, 2, 0, 1];
console.log(longestConsecutive(nums3)); // Output should be 3

const nums4 = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
console.log(longestConsecutive(nums4)); // Output should be