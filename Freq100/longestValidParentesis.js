/*
Given a string s of (, ), and lowercase English characters, your task is to remove the minimum number of parentheses
 (either ( or )) so that the resulting parentheses string is valid and return any valid string. Formally,
  a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 */

function minRemoveToMakeValid(s) {
    let toRemove = new Set()
    let stack = []


    for (let i = 0 ; i < s.length ; i++){
        if(s[i] === '('){
            stack.push(i) // push indexes of the brackets
        }
        else if(s[i] === ')' ){
            if(stack.length===0)
                toRemove.add(i)
            else{
                stack.pop()
            }
        }
    }

    console.log(stack)
    console.log(toRemove)

    while(stack.length>0){
        toRemove.add(stack.pop())
    }

    let res = ''
    for(let i = 0 ; i <s.length; i++){
        if(!toRemove.has(i))
            res+=s[i]
    }

    return res

}

// Example usage:
console.log(minRemoveToMakeValid("lee(t(c)o)de)")); // Output: "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d")); // Output: "ab(c)d"
console.log(minRemoveToMakeValid("))((")); // Output: ""
console.log(minRemoveToMakeValid("(a(b(c)d)")); // Output: "a(b(c)d)"
