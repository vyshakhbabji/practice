var minMeetingRooms = function(intervals) {

    let end = []
    let start = []
    for(let i = 0 ; i < intervals.length ; i ++){
        start[i] = intervals[i][0]
        end[i] = intervals[i][1]
    }
    start.sort()
    end.sort()
    let rooms=0,  j = 0
    for(let i = 0 ; i< start.length ; i++){
        if(start[i]<end[i])  rooms++
        else j++

    }
    return rooms
};

/*
    [[0,30],[5,10],[15,20]]

    start = [0,5,15] = > sort => [ 0,5,15 ]
    end = [30,10,20] = > sort = > [10,20,30]

    j = 0
    loop i =0 to start.len
    if(start[i] < end[j]
        room++
     else
        j++

     i = 0  j = 0  , start[0]<end[0]  0<10   T room = 1
     i = 1  j = 0 ,  start[1]<end[0]  5<10   T room = 2
     i = 2  j = 0  , start[2]< end[0]  15<10 F  j++

 */