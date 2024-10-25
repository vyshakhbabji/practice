/*
	Approach 
	- setup base case n = 1 return "1"
	- handle edge case n = 0 
	- for n>2 ,  recursively build compressed string by concatenating previosuly built string to new stirng 
		- if n = 1 return "1"
		- if n > 1 , initalize count = 1 and cur = [] 
		- iterate over prev  , if cur digit is next digit , increment count ,  else add count+prev[j] to cur  
		-reset count , rebuild new string from cur and assign it to prev 
	- time complexity-  O(2^n)  and space complexity is O(2^n) to store res  , O(d) for recursion stack  
*/


function countAndSay (m){

	if(n===0) return ""
	if(n==1) return "1"
	let prev = "1" 

	for(let i =2 ; i <= n ; i++){
		let cur = []
		let count = 1
		for(let j= 0 ; j <prev.length ; j ++){
			if(prev[j] === prev[j+1]){
				count++
			}else{
				cur.push(count , prev[j]) 
				count = 1
			}
		}
		prev = cur.join("")

	}

	return prev 

}