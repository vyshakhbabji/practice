function validPalindrome(s){

    function isAlphaNumeric(c){
        return /^[a-zA-Z0-9]$/.test(c)
    }

    let l = 0 , r=s.length-1

    while(l<r){
        //check if char is alphanumerbic if not move pointer
        while (l<r && !isAlphaNumeric(s[l])){
            l++
        }

        //check if char is alphanumerbic if not move pointer
        while (l<r && !isAlphaNumeric(s[r])){
            r--
        }
        //return false if string dont match
        if(s[l].toLowerCase()!==s[r].toLowerCase()){
            return false
        }
        l++
        r--
    }
    return  true
}

// Example usage:
console.log(validPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(validPalindrome("race a car")); // Output: false