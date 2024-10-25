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


Time complexity: O(n), where n is the length of the string.
Space complexity: O(1) (constant space).