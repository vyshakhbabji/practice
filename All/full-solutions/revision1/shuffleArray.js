/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.orig = [...nums]
    this.nums = [...nums]
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums= [...this.orig]
    return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let array = [...this.nums]
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Pick a random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements at i and j
    }
    return array
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */