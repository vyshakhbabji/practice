var minRemoveToMakeValid = function(s) {

    // check if paren is vcalid by iterating over string

    let stack = []
    let toRemove = []
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === "("){
            stack.push(i)
        }
        else if (s[i]===')'){
            if(stack.length>0) {
                stack.pop()
            }
            else{
                toRemove.push(i)
            }
        }
    }

    while(stack.length>0){
        toRemove.push(stack.pop())
    }

    let res = ''
    for(let i= 0 ; i < s.length ; i++){
        if(!toRemove.includes(i)){
            res+=s[i]
        }
    }

    return res

};


// Example usage:
console.log(minRemoveToMakeValid("lee(t(c)o)de)")); // Output: "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d")); // Output: "ab(c)d"
console.log(minRemoveToMakeValid("))((")); // Output: ""
console.log(minRemoveToMakeValid("(a(b(c)d)")); // Output: "a(b(c)d)"
