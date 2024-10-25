function intervalIntersection(A, B) {
    let i = 0;
    let j = 0;
    let res = [];

    while (i < A.length && j < B.length) {
        let intervalA = A[i];
        let intervalB = B[j];

        // Calculate the intersection between intervalA and intervalB
        let start = Math.max(intervalA[0], intervalB[0]);
        let end = Math.min(intervalA[1], intervalB[1]);

        if (start <= end) {
            res.push([start, end]);
        }

        // Move the pointer of the interval that ends first
        if (intervalA[1] < intervalB[1]) {
            i++;
        } else {
            j++;
        }
    }

    return res;
}


// Test cases
let A1 = [[0,2],[5,10],[13,23],[24,25]];
let B1 = [[1,5],[8,12],[15,24],[25,26]];
console.log(intervalIntersection(A1, B1)); // Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

let A2 = [[1,3],[5,9]];
let B2 = [];
console.log(intervalIntersection(A2, B2)); // Output: []

let A3 = [];
let B3 = [[4,8],[10,12]];
console.log(intervalIntersection(A3, B3)); // Output: []

let A4 = [[1,7]];
let B4 = [[3,10]];
console.log(intervalIntersection(A4, B4)); // Output: [[3,7]]