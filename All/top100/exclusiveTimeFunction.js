var exclusiveTime = function(n, logs) {
    let stack = []
    let prevTime = 0
    let res = Array(n).fill(0)
    for(let log of logs){
        let [id,type,time] = log.split(":")
        if(type === "start"){
            if(stack.length>0){
                let top = stack[stack.length-1]
                res[top]+=Number(time)-prevTime // update time on res for the process id top
            }
            stack.push(Number(id))
            prevTime = time
        }
        else{
            let poppedId = stack.pop()
            res[poppedId]+= Number(time)-prevTime+1 // update the res with process id
            prevTime  = Number(time)+1 // update time +1 as the function is running at that time
        }
    }
    return res
};

/*
    n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"] op = [3,4]

    iter1
    prevTime = 0    id =0 , time = 0 , stack= [0] ,  res =  []
    prevTime = 0    id =1 , time = 2  ,stack =[0,1]  res = [2-0] => [2]
    prevTime =


 */