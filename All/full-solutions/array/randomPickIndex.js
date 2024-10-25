class Solution {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.indices = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (!this.indices.has(nums[i])) {
                this.indices.set(nums[i], []);
            }
            this.indices.get(nums[i]).push(i);
        }
    }

    /**
     * @param {number} target
     * @return {number}
     */
    pick(target) {
        const indices = this.indices.get(target);
        const randomIndex = Math.floor(Math.random() * indices.length);
        return indices[randomIndex];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
function findMaxElement(int nums[])
{
    int
    max = Integer.MIN_VALUE;
    int
    idx = 0;
    for (int i = 0;
    i < nums.length;
    i++
)
    {
        if (nums[i] > max) {
            max = nums[i];
            count = 0;
        }
        if (nums[i] == max) {
            count++;
            if (rand.nextInt(count) == 0) {
                idx = i;
            }
        }
    }
    return idx;
}