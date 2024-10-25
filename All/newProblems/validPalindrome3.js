var isValidPalindrome = function(s, k) {

    let dp = new Array(s.length).fill(0).map(()=>new Array(s.length).fill(0))

    for(let i = s.length-1; i>=0; i--){
        for(let j = i; j<s.length; j++){
            if(i===j){
                dp[i][j] = 1
            }
            else if(s[i]===s[j]){
                dp[i][j] = dp[i+1][j-1]+2
            }
            else{
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    }

    return s.length-dp[0][s.length-1]<=k

};