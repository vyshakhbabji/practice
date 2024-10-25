var minMeetingRooms = function(intervals) {

    if (intervals.length === 0) return 0;


    // Sort the start and end times separately
    //[[0, 30],[5, 10],[15, 20]]
    let start = [];
    let end = [];

    for (let i = 0; i < intervals.length; i++) {
        start.push(intervals[i][0]);
        end.push(intervals[i][1]);
    }

    start.sort((a, b) => a - b); // [0, 5, 15]
    end.sort((a, b) => a - b); // [10, 20, 30]

    let rooms = 0;
    let endIdx = 0;

    for (let i = 0; i < start.length; i++) {
        if (start[i] < end[endIdx]) { // iteration1 0 < 10 => rooms = 1, iteration2 5 < 10 => rooms = 2, iteration3 15 < 10 => rooms = 2
            rooms++;
        } else {
            endIdx++; // iteration1 0 < 10 => endIdx = 1, iteration2 5 < 10 => endIdx = 1, iteration3 15 < 10 => endIdx = 2
        }
    }

    return rooms;


};

// Time: O(NlogN) for sorting

// Space: O(N) for storing start and end times


let intervals = [[0, 30],[5, 10],[15, 20]];
console.log(minMeetingRooms(intervals)); // Output: 2

intervals = [[7,10],[2,4]];
console.log(minMeetingRooms(intervals)); // Output: 1