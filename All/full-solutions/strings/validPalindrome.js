function isValidPalindrome(s) {
    // Helper function to check if a character is alphanumeric
    // Helper function to check if a character is alphanumeric
    function isAlphanumeric(c) {
        const code = c.charCodeAt(0);
        return (code >= 48 && code <= 57) || // numeric (0-9)
            (code >= 65 && code <= 90) || // upper alpha (A-Z)
            (code >= 97 && code <= 122);  // lower alpha (a-z)
    }

    // Convert string to lower case and filter out non-alphanumeric characters
    s = s.toLowerCase().split('').filter(char => isAlphanumeric(char)).join('');


    let l=0 , r =s.length-1

    if(s[l]!==s[r]){
            return  false

        l++
        r--
    }

    return true

}

console.log(isValidPalindrome("A man, a plan, a canal: Panama"))