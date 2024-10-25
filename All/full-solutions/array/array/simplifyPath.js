var simplifyPath = function(path) {

    let  dir = path.split('/')
    let stack  = []
    for (let i = 0; i < dir.length; i++) {
        const element = dir[i];

        // Condition to push element onto the stack
        if (element === "" || element === ".") {
            continue
        }

        if(element === ".."){
            stack.pop()
        }else{
            stack.push(element)
        }
    }

    return "/"+stack.join('/')

};

let path = "/a/./b/../../c/"

console.log(simplifyPath(path))