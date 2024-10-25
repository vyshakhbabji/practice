/*

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false


Approach : 

1. You have a dictionary of words and a sentence/string s 
2. see if the string can be broken down and is in the dictinoary 
3. segmented into space-seperated-sequence 

		
  s 	=    l e e t c o d e
  word       l e e t  		
 dp     =          T       T	


*/



function wordBreak(s,wordDict){
	
	//put the wordDict in set for easy lookup
	let wordSet = new Set(wordDict)
	let dp = Array(s.length+1).fill(false)
	dp[s.length] = true 

	//iterate over the string from the end 
	for(let i = s.length-1; i >=0 ; i--){
		// check if the s.substring(i...x) matches the word from the set 
		for(let w of wordSet){
			let wLen = w.length
			if(i+wLen <=s.length && s.substring(i,i+wLen) === w )
				dp[i] = dp[i+wLen]
			if(dp[i]===true)break 
		}
	}

	return dp[0]

}



function wordBreak2(s, wordDict) {
    let memo = {};
    let wordSet = new Set(wordDict);

    function dfs(start) {
        if (start in memo) return memo[start];  // Memoization to avoid recomputation
        if (start === s.length) return [""];    // Base case: when the end of the string is reached

        let res = [];
        for (let end = start + 1; end <= s.length; end++) {
            let word = s.substring(start, end);
            if (wordSet.has(word)) {
                let subResults = dfs(end);  // Recursively process the rest of the string
                for (let subResult of subResults) {
                    // Correct concatenation: Add space only when subResult is not an empty string
                    res.push(word + (subResult === "" ? "" : " " + subResult));
                }
            }
        }

        memo[start] = res;  // Store result in memo
        return res;
    }

    return dfs(0);  // Start the DFS from the beginning of the string
}
























