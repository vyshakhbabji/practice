/*
Description:
Given a string containing only digits, return all possible valid IP
address combinations that can be formed by inserting dots into the string.
 A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single dots, and cannot have leading zeros (except for the number 0 itself).

Input:

A string s containing only digits.
Output:

An array of strings representing all possible valid IP address combinations.
 */


function restoreIpAddresses(s) {

    let res= []
    function dfs(index, parts){

        if(parts.length ===4 && index === s.length){
            res.push(parts.join('.'))
        }

        // this is for first 3 chars
        for(let i = index; i < index+3 ; i ++){
            if(i>=s.length) break
            let part = s.substring(index,i+1)
            if(isValid(part)){
                parts.push(part)
                dfs(i+1, parts)
                parts.pop()
            }
        }
    }

    function isValid(part){
        if(part.length===0) return false
        if(part.length >1 && part[0] === "0") return  false
        if(part <0 || part >255) return false
        return true
    }

    dfs(0,[])

    return res
}

// Example usage:
console.log(restoreIpAddresses("25525511135")); // Output: ["255.255.11.135", "255.255.111.35"]
console.log(restoreIpAddresses("0000")); // Output: ["0.0.0.0"]
console.log(restoreIpAddresses("1111")); // Output: ["1.1.1.1"]
console.log(restoreIpAddresses("010010")); // Output: ["0.10.0.10", "0.100.1.0"]
