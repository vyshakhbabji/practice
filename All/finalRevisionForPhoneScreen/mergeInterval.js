var merge = function (intervals) {

    let res = []
    intervals.sort((a,b)=>a[0]-b[0])
    let [start1, end1] = intervals[0]
    i = 1
    while (i < intervals.length) {
        let [start2, end2] = intervals[i]
        if (start2 <= end1) {
            end1 = Math.max(end1, end2)
        }
        else {
            res.push([start1, end1]);
            [start1, end1] = [start2, end2]
        }
        i++
    }

    res.push([start1,end1])

    return res

};

Time complexity: Cannot be optimized further due to the sorting requirement (O(n log n)).
Space complexity: Already optimal at O(n), and further optimization would likely sacrifice code readability or only result in minor improvements.