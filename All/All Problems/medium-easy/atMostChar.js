
/*
Problem Statement
You are given a string s consisting of lowercase English letters. Your task is to determine the length of the longest substring that contains at most two distinct characters.

Input
A string s of length n (1 <= n <= 10^5).
Output
Return an integer representing the length of the longest substring with at most two distinct characters.
Example
Input:

s = "eceba"
Output:

3
Explanation: The longest substring with at most two distinct characters is "ece", which has a length of 3.

Input:

s = "ccaabbb"
Output:

5
Explanation: The longest substring with at most two distinct characters is "aabbb", which has a length of 5.


Approach 
1. l and r initialized to 0  , set for chars  
2. while r is expanding , keep a track of chars and size of set until its 2 
3. if set size becomes 3 that means there is 3rd char , now , move the l towards are unti the set size is reset to 2 using while loop and then expand right again 
4.while all this happens keep track of max len 
5. return max Len 


Tme complexity : O(n) and space complexity O(1) , set is just 2 char 
*/

function charReplacement2(s){
	let set = new Set()
	let r  = 0 , l = 0 
	let maxLen = 0 

	let map = {}
	while(r<s.length){

		if(!(s[r] map)){
			map[s[r]] = 0 
		}
		map[s[r]]+=1

		while(map.size>2){
			
			map[s[l]]-=1
			if(map[s[l]]===0){
				delete map([s[l]])
			}
			l++
		}

		maxLen =Math.max(maxLen, r-l+1)
		r++
		
	}

	return maxLen
}

























