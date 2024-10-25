function merge(intervals){
    let res = []
    if(intervals.length<=1){
        return intervals
    }
    intervals.sort((a,b)=>a[0]-b[0])
    let i = 1
    let newInterval = intervals[0]
    while( i < intervals.length){
        let prev = newInterval
        let cur = intervals[i]
        if(prev[1]>=cur[0]){
            let start = prev[0]
            let end =  Math.max(cur[1],prev[1])
            newInterval = [start,end]
        }
        else{
            newInterval = cur
            res.push(prev)
        }
        i++
    }
    res.push(newInterval)
    return res
}

console.log(merge([[1,4],[5,6]]))
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))