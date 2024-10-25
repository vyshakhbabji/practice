
//validPalindrome 3

function longestPalindromicSubsequence(s,k){

    const n = s.length

    const dp =  Array.from({length:s.length} , ()=>Array(s.length).fill(0))

    for(let i = 0 ; i < s.length; i++){
        dp[i][i] =1
    }

    for(i= n-1 ; i >=0 ; i--){
        for ( j= i+1; j<n ; j++){

            if(s[i]===s[j])
                dp[i][j] = 2+ dp[i+1][j-1]
            else
                dp[i][j] = Math.max(dp[i][j-1] , dp[i+1][j])
        }
    }

    console.log('dp' ,dp)

    return n - dp[0] [ n-1] <=k

}

console.log(longestPalindromicSubsequence("abca" ,1))