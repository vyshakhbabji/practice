/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes(nums, k) {
    let left = 0;
    let maxLength = 0;
    let zerosCount = 0;

    for (let right = 0; right < nums.length; right++) {
        // If the current element is 0, increment the zero count
        if (nums[right] === 0) {
            zerosCount++;
        }

        // If the zero count exceeds k, move the left pointer to the right
        while (zerosCount > k) {
            if (nums[left] === 0) {
                zerosCount--;
            }
            left++;
        }

        // Calculate the length of the current window
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
const nums = [1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0];
const k = 2;
console.log(longestOnes(nums, k)); // Output: 6
