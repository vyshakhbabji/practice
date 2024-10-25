/*
Problem Statement:
You are given a string s and allowed to remove at most one character from it. Your task is to determine if it is possible to make the string a palindrome after removing at most one character.

Example:
Example 1:
Input: s = "abca"
Output: true
Explanation: You could remove the character 'c' to make "aba", which is a palindrome.
Example 2:
Input: s = "racecar"
Output: true
Explanation: The string is already a palindrome, so no need to remove any character.
Example 3:
Input: s = "abc"
Output: false
Explanation: It is not possible to make the string a palindrome by removing only one character.
Notes:
A palindrome is a string that reads the same forward and backward.
You should return true if it’s possible to make the string a palindrome by removing at most one character, otherwise return false.



Approach : 
1. input is string , need to find its palindrome or not by if its not already by remoing only 1 char and checking if it becomes a plaindrome 
2. 2 step process but still o(N) time complexity can be preserved 
3. First step would be to check if right and left chars are same by running left and right pointer 
4.  when u hit a char when s[l]!=s[r] ,  u skip 1 char either on left or on right and check if s[r]==s[l] for remianing chars . if its true return true else false
5.space is O(1) and time is O(N) where m is no of chars  

*/

function isValidPalindrome(s,l,r){
	while(l<r){
		if(s[l]!==s[r]) return false
		l++
		r-- 
	}
	return true 
}

function validPalindrome(s){
	let l = 0 , r = s.length-1
	while(l<r){
		if(s[l]!==s[r]){
			return isValidPalindrome(s,l,r-1) || isValidPalindrome(s,l+1,r)
		}
		l++
		r--
	}
	return true
}