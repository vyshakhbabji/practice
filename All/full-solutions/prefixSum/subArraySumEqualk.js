//Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

function subArraySum(nums,k){


    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);

    for (let n of arr) {
        sum += n;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;


}



// Example input
const nums = [1, 1, 1];
const k = 2;
console.log(subArraySum(nums, k)); // Output should be 2