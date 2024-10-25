function longestPalindromicSubstring(str) {

    let start = 0
    let end = 0

    for (let i = 0; i < str.length; i++) {
        let len1 = expandAroundCenter(str, i, i)
        let len2 = expandAroundCenter(str, i, i + 1)
        let len = Math.max(len1, len2)
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }
    }
    return str.substring(start, end + 1)

}


//input
let str = "babad"
console.log(longestPalindromicSubstring(str)) //Output should be "bab" or "aba"

// Time complexity: O(n^2) where n is the length of the input string


//input
str = "cbbd"
console.log(longestPalindromicSubstring(str)) //Output should be "bb"

// Time complexity: O(n^2) where n is the length of the input string


//input

str = "a"
console.log(longestPalindromicSubstring(str)) //Output should be "a"