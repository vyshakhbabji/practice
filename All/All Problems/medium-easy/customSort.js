/*
Problem Statement:
Given a string s and a string order, you need to reorder the characters of s so that they match the order of characters as 
they appear in order. If a character from s does not appear in order, it can appear anywhere in the result.

Example:
Example 1:
Input:
order = "cba"
s = "abcd"
Output: "cbad"
Explanation: The characters 'a', 'b', and 'c' are reordered according to "cba", and 'd' appears at the end.
Example 2:
Input:
order = "kqep"
s = "pekeq"
Output: "kqeep"
Explanation: The characters 'p', 'e', 'k', and 'q' are reordered according to "kqep".
Notes:
order will contain unique characters.
The string s can contain duplicate characters.
Characters in s that do not appear in order should maintain their original relative order.


Approach:

1. create freqMap to hold string' char frequency 
2. check order and build string from freqmap , reduce count on freqmap . if count 0 delete from map 
3. push remaning chars from freqmap into the new string 
4. return 

Time and Space:
1. Freqmap o(N) or k for k chars 
2. O(n) for building map ,  O(1) for searching at most m times  in map and O(n) for building string  so O(m+n)

Debate: 
Use of map vs array for freqMap 
1. if limited constraint of 26 char , slightly efficient , coding could be slightly complex
2. map can store arbitarary chars so , map is scalable well 
*/

function customSort(order, s){
	let freqMap = {}
	
	//construct map 
	for(let c of s){
		freqMap[c] = (freqMap[c]||0) + 1
	}

	let res = ""
	//build new string based of order
	for(let o of order){
		if(o in freqMap){
			res+= o.repeat(freqMap[o]) //repeat the append and remove from map 
			delete freqMap[o]
		}
	}

	for(let k of Object.keys(freqMap)){
		res+=k.repeat(freqMap[k]) // repeat the append ,  can remove from map but not needed 
	}

	return res 
}























