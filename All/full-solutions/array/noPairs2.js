function countGoodPairs(nums1, nums2, k) {
    const nums2Count = new Map();
    let count = 0;

    // Step 1: Build a hashmap for nums2
    for (let num of nums2) {
        nums2Count.set(num, (nums2Count.get(num) || 0) + 1);
    }

    // Step 2: Iterate over nums1 and count good pairs
    for (let num1 of nums1) {
        // Check if there exists a num2 such that num1 % (num2 * k) === 0
        for (let [num2, cnt] of nums2Count) {
            if (num1 % (num2 * k) === 0) {
                count += cnt;
            }
        }
    }

    return count;
}

// Example input
const nums1 = [10, 15, 20, 25, 30];
const nums2 = [1, 2, 5];
const k = 2;
console.log(countGoodPairs(nums1, nums2, k)); // Example output

// Additional test cases
const nums1_2 = [12, 24, 36];
const nums2_2 = [2, 3, 4];
const k_2 = 3;
console.log(countGoodPairs(nums1_2, nums2_2, k_2)); // Example output

const nums1_3 = [9, 18, 27];
const nums2_3 = [1, 2, 3];
const k_3 = 3;
console.log(countGoodPairs(nums1_3, nums2_3, k_3)); // Example output



//another approach


const countGoodPairs = (nums1, nums2, k) => {
    // Unique elements from nums1
    let uniqueNums1 = new Set(nums1);

    // Frequency maps for nums1 and nums2
    let frequencyNums1 = new Map();
    let frequencyNums2 = new Map();
    let goodPairsCount = 0;

    // Count frequency of each element in nums1
    for (const num of nums1) {
        frequencyNums1.set(num, frequencyNums1.get(num) + 1 || 1);
    }

    // Count frequency of each element in nums2
    for (const num of nums2) {
        frequencyNums2.set(num, frequencyNums2.get(num) + 1 || 1);
    }

    // Iterate through unique elements in nums1
    for (const num1 of uniqueNums1) {
        // Find all factors of num1
        let factors = findAllFactors(num1);
        let count = 0;

        // Check all factors of num1
        for (const factor of factors) {
            // If factor / k exists in nums2, add its count
            count += frequencyNums2.get(factor / k) || 0;
        }

        // Multiply the count of num1 in nums1 by the number of valid factors
        goodPairsCount += count * frequencyNums1.get(num1);
    }

    return goodPairsCount;
};

// Function to find all factors of a number
const findAllFactors = (num) => {
    let factors = new Set();
    for (let i = 1; i * i <= num; i++) {
        if (num % i == 0) {
            factors.add(i);
            if (i !== num / i) {
                factors.add(num / i);
            }
        }
    }
    return factors;
};


// Example input
const nums1 = [1, 2, 4, 12];
const nums2 = [2, 4];
const k = 3;
console.log(countGoodPairs(nums1, nums2, k)); // Output should be 2

// Additional test cases
const nums1_2 = [12, 24, 36];
const nums2_2 = [2, 3, 4];
const k_2 = 3;
console.log(countGoodPairs(nums1_2, nums2_2, k_2)); // Example output

const nums1_3 = [9, 18, 27];
const nums2_3 = [1, 2, 3];
const k_3 = 3;
console.log(countGoodPairs(nums1_3, nums2_3, k_3)); // Example output