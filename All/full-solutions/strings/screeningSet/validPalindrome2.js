/*
Given a string s, you are allowed to delete at most one character. Determine if it can be a palindrome
 after deleting at most one character
 */

function validPalindrome(s){

    function isPalindrome(s,l,r){
        while(l<r){
            if(s[l]!==s[r]){
                return false
            }
            l++
            r--
        }
        return  true
    }

    let l= 0 , r= s.length-1

    while(l<r){
        if(s[l]!==s[r])
            return isPalindrome(s,l+1, r) || isPalindrome(s,l,r-1)

        l++
        r--
    }

    return true

}

// Example usage:
console.log(validPalindrome("abca")); // Output: true
console.log(validPalindrome("abc"));  // Output: false