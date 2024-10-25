function simplifyPath(s){
    let paths = s.split('')
    let stack = []
    for(let p of paths){
        if(p==="." || p=== "" ) continue // this is because we are not doing anything with these values
        if(p==="..") {
            if(stack.length>0) stack.pop() // this is because we are removing the last element in the stack
        }else{
            stack.push(p)
        }
    }
    return "/" + stack.join('/')
}
//only consider "." and ".." and "" as the only valid characters