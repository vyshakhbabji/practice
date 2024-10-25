var Solution = function(nums) {
    this.nums = nums;
};

Solution.prototype.pick = function(target) {
    let count = 0;
    let result = -1;

    for (let i = 0; i < this.nums.length; i++) {
        if (this.nums[i] === target) {
            count++;
            // Randomly select an index with equal probability
            if (Math.floor(Math.random() * count) === 0) {
                result = i;
            }
        }
    }

    return result;
};

// Example usage:
const nums = [1, 2, 3, 3, 3];
const solution = new Solution(nums);
console.log(solution.pick(3)); // Randomly returns 2, 3, or 4
