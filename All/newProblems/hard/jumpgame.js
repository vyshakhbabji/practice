//jumpgame5

var maxJumps = function(arr, d) {

    let n = arr.length;
    let dp = new Array(n).fill(0);

    let dfs = (i) => {
        if(dp[i] > 0) return dp[i];

        dp[i] = 1;

        for(let j = i + 1; j <= Math.min(n - 1, i + d) && arr[j] < arr[i]; j++) {
            dp[i] = Math.max(dp[i], 1 + dfs(j));
        }

        for(let j = i - 1; j >= Math.max(0, i - d) && arr[j] < arr[i]; j--) {
            dp[i] = Math.max(dp[i], 1 + dfs(j));
        }

        return dp[i];
    }

    let res = 0;

    for(let i = 0; i < n; i++) {
        res = Math.max(res, dfs(i));
    }

    return res;

};


//arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2
