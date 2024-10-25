/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

    let curnum= 0 
    let stack = []
    let lastop = "+"

    let i = 0 
    while(i<=s.length){
        if(i<s.length && isDigit(s[i])){
            buildNumber(s[i])
        }
        if(i===s.length || !isDigit(s[i]) && s[i]!==" "){
            operations(lastop)
            lastop = s[i]
            curnum=0
        }
        i++
    }
    
    function isDigit(c){
        return /^[0-9]$/.test(c)
    }

    function buildNumber(n){
        curnum = 10*curnum+parseInt(n)
    }

    function operations(op){
        switch (op){
            case '+' : stack.push(curnum)
            break
            case '-' : stack.push(-curnum)
            break
            case "*" : stack.push(stack.pop()*curnum)
            break
            case "/" : stack.push(Math.trunc(stack.pop()/curnum))
            break
        }
    }

    console.log(stack)
    return stack.reduce((a,b)=>a+b)
};



Time complexity: O(n), where n is the length of the string.
Space complexity: O(n) due to the stack used for storing intermediate results.
