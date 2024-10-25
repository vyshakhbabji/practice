var minMeetingRooms = function(intervals) {

    let start = intervals.map((a)=>a[0])
    let end = intervals.map((a)=>a[1])

    start.sort((a,b)=> a-b)
    end.sort((a,b)=>a-b)

    let endIdx= 0 
    let rooms = 0
    for(let i = 0 ; i < start.length ; i++){
        if(start[i]<end[endIdx]){
            rooms++
        }else{
            endIdx++
        }
    }

    return rooms
};

//Time complexity. :  O(nlogn) , spce : O(N)