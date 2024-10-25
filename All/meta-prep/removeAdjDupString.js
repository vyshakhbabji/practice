var removeDuplicates = function(s) {

    let stack = []
    for(let c of s){
        if(stack.length>0 && stack[stack.length-1] === c){
            stack.pop()
        }
        else{
            stack.push(c)
        }
    }

    return stack.join('')

};

let s = "azxxzy"
console.log(removeDuplicates(s))