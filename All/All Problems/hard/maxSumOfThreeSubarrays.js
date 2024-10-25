var maxSumOfThreeSubarrays = function(nums, k) {
    const n = nums.length;
    const sum = new Array(n + 1).fill(0);
    
    // Calculate prefix sum
    for (let i = 0; i < n; i++) {
        sum[i + 1] = sum[i] + nums[i];
    }
    
    // Arrays to store the best left and right subarray indices
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);
    
    // Find the best left subarray for each position
    let bestLeftIndex = 0;
    for (let i = k; i < n; i++) {
        if (sum[i] - sum[i - k] > sum[bestLeftIndex + k] - sum[bestLeftIndex]) {
            bestLeftIndex = i - k;
        }
        left[i] = bestLeftIndex;
    }

    // Find the best right subarray for each position
    let bestRightIndex = n - k;
    right[n - k] = bestRightIndex;
    for (let i = n - k - 1; i >= 0; i--) {
        if (sum[i + k] - sum[i] >= sum[bestRightIndex + k] - sum[bestRightIndex]) {
            bestRightIndex = i;
        }
        right[i] = bestRightIndex;
    }

    // Now find the middle subarray and combine it with the best left and right
    let maxSum = 0;
    let result = [];
    for (let middle = k; middle <= n - 2 * k; middle++) {
        let l = left[middle - 1];
        let r = right[middle + k];
        let total = (sum[l + k] - sum[l]) + (sum[middle + k] - sum[middle]) + (sum[r + k] - sum[r]);
        
        if (total > maxSum) {
            maxSum = total;
            result = [l, middle, r];
        }
    }
    
    return result;
};