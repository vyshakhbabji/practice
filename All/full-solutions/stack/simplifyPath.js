var simplifyPath = function(path) {

    let stack = []

    //  .  => curdir ..=>parent dir  // => single slash
    // must start with /
    // /dir/xxx 2 diff dir so should start with  / and /
    // shouldnt end with / unless its root dir
    // exclude any . or ..
    // return new path

    let parts  = s.split('/')

    for(let p of parts){
        if( p === "." || p === "" ) continue // ignore "" and .
        if(p=== "..") {
            if(stack.length>0) stack.pop()
        }else{
            stack.push(p)
        }
    }



    return "/"+stack.join('/')


};