var exclusiveTime = function(n, logs) {
    let stack = []
    let res = Array(n).fill(0)
    let prevTime = 0
    for(let log of logs){
        let [id,type,time]=log.split(":")
        if(type==="start"){
            if(stack.length>0){
                let top = stack[stack.length-1]
                res[top]+=Number(time)-prevTime
            }
            stack.push(Number(id))
            prevTime = Number(time)
        }else{
            let popped = stack.pop()
            res[popped]+=Number(time)-prevTime+1
            prevTime = Number(time)+1
        }
    }
    return res
};