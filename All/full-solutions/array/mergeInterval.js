// import heapq
//
// def merge_intervals(intervals):
//     if not intervals:
//         return []
//
//     # Min-heap to store intervals by start time
//     heap = []
//    
//     # Add all intervals to the heap
//     for interval in intervals:
//         heapq.heappush(heap, interval)
//
//     merged = []
//
//     # Process the intervals in the heap
//     while heap:
//         current = heapq.heappop(heap)
//        
//         # If merged is empty or there is no overlap, add the interval
//         if not merged or merged[-1][1] < current[0]:
//             merged.append(current)
//         else:
//             # There is overlap, so merge intervals
//             merged[-1][1] = max(merged[-1][1], current[1])
//
//     return merged
//
// # Example usage
// stream_intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// result = merge_intervals(stream_intervals)
// print(result)  # Output: [[1, 6], [8, 10], [15, 18]]



function merge(intervals) {
    if(intervals.length===0) return []

    let merged = []
    let prev = intervals[0]

    for(let i = 1 ; i< intervals.length ; i++){

        let cur = intervals[i]

        if(cur[0] <= prev[1]){
            prev[1] = Math.max(prev[1], cur[1])
        }
        else {
            merged.push(prev)
            prev=cur
        }
    }

    merged.push(prev)
    return merged
}

// Test cases
let intervals1 = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals1)); // Output: [[1,6],[8,10],[15,18]]

let intervals2 = [[1,4],[4,5]];
console.log(merge(intervals2)); // Output: [[1,5]]

let intervals3 = [[1,4],[0,2],[3,5]];
console.log(merge(intervals3)); // Output: [[0,5]]

let intervals4 = [[1,4]];
console.log(merge(intervals4)); // Output: [[1,4]]

let intervals5 = [];
console.log(merge(intervals5)); // Output: []
