function isValid(s){

    let stack = []
    let map = {
        "}" : "{" ,
        ']' : "[",
        ")" : "("
    }

    // let top = null
    for (let c of s){
        let top = stack.length-1
        if(c=== '{' ||  c === "(" || c === "[" ){
            stack.push(c)
        }
        else{
            if(c === '}' || c===']' || c === ")"){
                if(stack[top] === map[c] && top!=-1){
                    stack.pop()
                    top--
                }
            }
        }
    }

    return stack.length === 0



}

// Example usage:
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true