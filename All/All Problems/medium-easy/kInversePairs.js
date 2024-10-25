var kInversePairs = function(n, k) {
    const MOD = 1000000007;
    const memo = Array.from({ length: n + 1 }, () => Array(k + 1).fill(null));

    // Recursive function with memoization
    const helper = (n, k) => {
        // Base cases
        if (n === 0) return 0;    // No valid arrays for n == 0
        if (k === 0) return 1;    // 1 way to arrange n elements with 0 inverse pairs (sorted array)

        // Check if already computed
        if (memo[n][k] !== null) return memo[n][k];

        let inv = 0;

        // Calculate number of inverse pairs by placing the nth element in different positions
        for (let i = 0; i <= Math.min(k, n - 1); i++) {
            inv = (inv + helper(n - 1, k - i)) % MOD;
        }

        // Store the result in the memo table
        memo[n][k] = inv;

        return inv;
    };

    // Call the recursive function
    return helper(n, k);
};
