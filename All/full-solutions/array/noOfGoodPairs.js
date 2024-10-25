function numIdenticalPairs(nums) {
    const countMap = new Map();
    let goodPairs = 0;

    // Iterate through the array
    for (let num of nums) {
        // If the number is already in the map, increment the good pairs count by the current count
        if (countMap.has(num)) {
            goodPairs += countMap.get(num);
            countMap.set(num, countMap.get(num) + 1);
        } else {
            // Otherwise, add the number to the map with count 1
            countMap.set(num, 1);
        }
    }

    return goodPairs;
}

// Example input
const nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums)); // Output should be 4

// Additional test cases
const nums2 = [1, 1, 1, 1];
console.log(numIdenticalPairs(nums2)); // Output should be 6

const nums3 = [1, 2, 3];
console.log(numIdenticalPairs(nums3)); // Output should be 0
