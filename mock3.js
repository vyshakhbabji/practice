// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = ""aab""
// Output: [["a","a","b"],["aa","b"] ]
// Example 2:

// Input: s = "a"
// Output: [["a"]]


Time Complexity  O(N * 2^n)  
Space Complexity O(N)


function palindromePartitioning(s){

	function isPalindrome(s,l,r){
		 // Palindrome imple 
	}

	let res = []

	function backtrack (index, cur , ){

		if(index === s.length){
			return 
		}


		// []
		// a 
		// a 
		// b 

		//aa
		//ab
		//aab
	

		for(end = index ; end < s.length ; end++){
			cur.push(s.substring(index , end ))


			if(isPalindrome(cur)) {
			backtrack(index+1 , cur )
			cur.pop()
		}

	}

	backtrack(0, [])

	return res 

}




var partition = function (s) {
    const res = [];
    dfs(s, [], res);
    return res;
    function dfs(s, path, res) {
        if (!s.length) {
            res.push(path);
            return;
        }
        for (let i = 0; i < s.length; i++) {
            const cur = s.substr(0, i + 1);
            if (isPalindrome(cur)) {
                // add current substring in the currentList
                dfs(s.substr(i + 1), path.concat(cur), res);
                // backtrack and remove the current substring from currentList

                //currentList.remove(currentList.size() - 1);
            }
        }
    }
    function isPalindrome(s) {
        let lo = 0,
            hi = s.length - 1;
        while (lo < hi) {
            if (s[lo++] != s[hi--]) return false;
        }
        return true;
    }
};



















