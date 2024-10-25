var merge = function(intervals) {

    if(intervals.length===0) return []
    if(intervals.length===1) return intervals
    intervals.sort((a,b)=>a[0]-b[0])
    let [start1,end1] = intervals[0]
    let res = []
    let i = 1

    while(i<intervals.length){
        let [start2,end2] = intervals[i]


        // [1,3] [2,6] = >  [ 1 , 6 ] , [8,10 ] = >  res = [1,6] = > [8.10], [15,18]
        if(start2<=end1){
            [start1, end1] = [Math.min(start1,start2), Math.max(end1,end2)]
        }
        else{
            res.push([start1,end1]);
            [start1,end1] = [start2,end2]
        }
        i++
    }

    res.push([start1,end1])
    return res

}

let intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(merge(intervals))