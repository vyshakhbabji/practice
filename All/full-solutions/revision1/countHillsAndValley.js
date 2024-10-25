function countHillsAndValley(nums){

    if (nums.length < 3) return 0;

    // Remove consecutive duplicates
    let uniqueNums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            uniqueNums.push(nums[i]);
        }
    }

    let count = 0;
    for (let i = 1; i < uniqueNums.length - 1; i++) {
        let prev = uniqueNums[i - 1],  cur = uniqueNums[i], next = uniqueNums[i + 1];
        if ((prev < cur && cur > next) || (prev > cur && cur < next)) {
            count++;
        }
    }

    return count;

}