function sortArrayByParity(nums) {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] % 2 === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];  // Swap even element to the front
            i++;
        }
    }

    return nums;
}

// Example usage:
const nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums)); // Output: [2, 4, 3, 1] (or any other valid arrangement)



//new Array approach

function sortArrayByParity(nums) {
    const result = [];

    // First add all even numbers
    for (let num of nums) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }

    // Then add all odd numbers
    for (let num of nums) {
        if (num % 2 !== 0) {
            result.push(num);
        }
    }

    return result;
}

// Example usage:
const nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums)); // Output: [2, 4, 3, 1] (or any other valid arrangement)
