function mergeInterval(intervals) {

}


//Input: [[1,3],[2,6],[8,10],[15,18]]
let intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(mergeInterval(intervals)); // Output: [[1,6],[8,10],[15,18]]

//Input: [[1,4],[4,5]]

let intervals2 = [[1,4],[4,5]];
console.log(mergeInterval(intervals2)); // Output: [[1,5]]

//Input: [[1,4],[0,4]]
let intervals3 = [[1,4],[0,4]];
console.log(mergeInterval(intervals3)); // Output: [[0,4]]