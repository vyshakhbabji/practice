var minMeetingRooms = function(intervals) {

    let start = []
    let end = []
    // [[0, 30],[5, 10],[15, 20]]
    for(let i =0 ; i < intervals.length; i++){
        start.push(intervals[i][0])
        end.push(intervals[i][1])
    }

    start.sort((a,b)=>a-b)  // 0 , 5, 15
    end.sort((a,b)=>a-b) // 10 20 30

    let rooms=0
    let endIdx = 0
    for(let i = 0 ; i < start.length ; i++){
        if(start[i]<end[endIdx]){ // 0 < 10  rooms= 1 idx =0 , 5< 10 rooms=2 idx = 0 ,  15< 10 idx=1 rooms=2
            rooms++
        }else{
            endIdx++
        }
    }

    return rooms



};

// Time: O(NlogN) for sorting

// Space: O(N) for storing start and end times


let intervals = [[0, 30],[5, 10],[15, 20]];
console.log(minMeetingRooms(intervals)); // Output: 2

intervals = [[7,10],[2,4]];
console.log(minMeetingRooms(intervals)); // Output: 1