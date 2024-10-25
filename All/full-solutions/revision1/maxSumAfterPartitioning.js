var maxSumAfterPartitioning = function(arr, k) {

    // r, l are the right and left boundaries of the subarray
    // that we are currently considering
    let n = arr.length;
    let dp = new Array(n).fill(0);
    for (let r = 0; r < n; r++) {
        let max = 0;
        for (let l = r; l >= 0 && r - l + 1 <= k; l--) {
            max = Math.max(max, arr[l]);
            dp[r] = Math.max(dp[r], (l - 1 >= 0 ? dp[l - 1] : 0) + max * (r - l + 1));
        }
    }
    return dp[n - 1];

};