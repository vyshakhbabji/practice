var findMaxLength = function(nums) {
    //treat 0 as -1
    // increase or decrease l and r

    let map = new Map();
    map.set(0, -1);
    let sum = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if (map.has(sum)) {
            max = Math.max(max, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
    return max;
};