/*

Problem Statement
You are given a string consisting of lowercase English letters. Your task is to find the length of the longest substring without repeating characters.

Input:

A string s consisting of lowercase English letters.
Output:

An integer representing the length of the longest substring that contains no repeating characters.
Example:

Input: s = "abcabcbb"
Output: 3
Explanation: The longest substring without repeating characters is "abc", which has a length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The longest substring without repeating characters is "b", which has a length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The longest substring without repeating characters is "wke", which has a length of 3. Note that "pwke" is also a valid substring but has the same length.

Input: s = ""
Output: 0
Explanation: The input string is empty, so the output is 0.




Approach: 
1. The main goal is to keep a track of max substring length with condition that this substring should not have repeating chars 
2. iterate over the string checking chars 1 by one if they already exisits in some sort of a datastructre , ds choices ? (hm , set ) if set ,  then add / delete is O{1} could be good option or hm freq should be maintained to be 1 ,.lets go with set 
3. 2 pointer approach with left and right pointer . while u get uniq chars , expand r to right , when u get duplicate , compress l to right until all chars dups are removed from set when compressing 
4. while doing so , makesure to keep a maxLen whne expanding and compressing the 2 ponter end the loop when r reaches string length 

Edge cases would be no string ,  return 0  , all string same- logic should work and return 1 
*/


function longestRepWithNoDup(s){
	let r = 0 , l = 0 
	let set = new Set()
	let maxLen = 0 
	while(r<s.length){

		let chars = s[r]
		
		if(!set.has(chars)){
			set.add(chars)
			maxLen = Math.max(maxLen, r-l+1)
			r++
		}
		else{
			while(set.has(chars)){
				set.delete(s[l])
				l++
			}

		}			

	}

	return maxLen
}


































