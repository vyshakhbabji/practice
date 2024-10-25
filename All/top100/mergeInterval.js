var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let [start1, end1] = intervals[0]
    let res= []
    for(let i = 1 ; i<intervals.length; i ++){
        let [start2 , end2] = intervals[i]

        if(start2<=end1){
            [start1,end1] = [Math.min(start1,start2) , Math.max(end1,end2)]
        }
        else{
            res.push([start1,end1]);
            [start1,end1] = [ start2, end2]
        }
    }
    res.push([start1,end1])
    return res
};
//time complexity is O(nlogn) because of sorting

/*

intervals = [[1,3],[2,6],[8,10],[15,18]]

[1,3]  <==> [2,6 ]  ==>  [1, 6]
[1,6]  <==> [8,10]  ==>   [1.6] [8,10]
[8,10] <==> [15,18]  ==>   [1,6] [8,10] [15,18]


 */