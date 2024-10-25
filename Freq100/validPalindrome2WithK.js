function validPalindrome2(s,k){

    let i = 0 , r = s.length-1

    function isValidPalindrome(s,k,l,r){
        while(l<r){
            if(s[l]!==s[r]){
                if(k===0) return false
                return isValidPalindrome(s,k-1,l+1,r)|| isValidPalindrome(s,k-1,l,r-1)
            }
            l++
            r--
        }
    }
    // while(l<r){
    //   if(s[l]!==s[r]){
    return isValidPalindrome(s,k,l,r) // || isValidPalindrome(s,l , r-1)
    //   }
    //   l++
    //   r--
    // }

    // return true
}