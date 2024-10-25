function longestPalindrome(s){

    let freq = {}

    for(let char of s){
        freq[char] = (freq[char] || 0 ) + 1
    }

    let len = 0
    let hasOdd = false
    for(let count of Object.values(freq)){
        //if even then add the number of chars to string len
        if(count%2===0){
            len+=count
        }
        //this is odd count,  so just add count and remove 1 char
        else{
            len+=count -1 // add pairs and leave one char aside
            hasOdd = true
        }

    }

    //if odd exiits we can use that for middle char
    if(hasOdd){
        len+=1
    }




    return len


}

console.log(longestPalindrome("abccccdd")); // Output: 7
console.log(longestPalindrome("a")); // Output: 1
console.log(longestPalindrome("bb")); // Output: 2
console.log(longestPalindrome("AaBb")); // Output: 1
console.log(longestPalindrome("aaabbbccc")); // Output: 7