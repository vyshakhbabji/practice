function validParentheses(s){

    let stack = []

    let map = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    }

    let i = 0
    while(i<s.length){
        if(stack.length >0 && stack[stack.length-1] === map[s[i]]){
            stack.pop()
        }
        else {
            stack.push(s[i])
        }
        i++
    }

    return stack.length === 0


}

const input = '()';
console.log(validParentheses(input)); // Output should be true

const input2 = '()[]{}';
console.log(validParentheses(input2)); // Output should be true

const input3 = '(]';
console.log(validParentheses(input3)); // Output should be false