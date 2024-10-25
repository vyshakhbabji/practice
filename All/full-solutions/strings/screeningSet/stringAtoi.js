/*
Description:
Implement the myAtoi function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is
either. This determines if the final result is negative or positive. Assume the result is positive if neither is present.
Read in the next characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e., "123" -> 123).
If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains
in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
Return the integer as the final result.
Input:

A string s.
Output:

An integer parsed from the string.
 */

function myAtoi(s){

    let res  = 0
    let MAX = 2**31 -1
    let MIN = - (2**31)
    let sign = 1
    let i = 0

    //exclude whitespaces
    while(i<s.length && s[i]===" "){
        i++
    }

    // capture sign if any
    if(s[i] === "+" || s[i]==="-"){
        sign = s[i] === "-"? -1 : 1
        i++
    }

    //read digits and ignore all letters/string
    while(i<s.length && (s[i]>="0" && s[i]<="9")){
        res = res *10 + parseInt(s[i])
        if(sign === -1 && -res < MIN ) return MIN
        if(sign === 1 && res>MAX) return MAX
        i++
    }

    return  res * sign


}


// Example usage:
console.log(myAtoi("42")); // Output: 42
console.log(myAtoi("   -42")); // Output: -42
console.log(myAtoi("4193 with words")); // Output: 4193
console.log(myAtoi("words and 987")); // Output: 0
console.log(myAtoi("-91283472332")); // Output: -2147483648