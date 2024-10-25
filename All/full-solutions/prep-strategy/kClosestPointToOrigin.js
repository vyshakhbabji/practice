//Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// Example 1:
// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]

// Example 2:
// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]

function kClosest(points, k) {
    const dist = (x, y) => x * x + y * y;
    points.sort((a, b) => dist(a[0], a[1]) - dist(b[0], b[1]));
    return points.slice(0, k);
}

// Time complexity: O(n log n)
// Space complexity: O(n)

//explaining the code
//1. We are given an array of points and an integer k.
//2. We need to return the k closest points to the origin.
//3. We will use the Euclidean distance formula to calculate the distance between two points.
//4. We will sort the points array based on the distance from the origin.
//5. We will return the first k points from the sorted array.


//using quick select

function kClosest(points, k) {
    const dist = (x, y) => x * x + y * y;
    const quickSelect = (left, right) => {
        if (left >= right) return;
        let pivot = left;
        for (let i = left; i < right; i++) {
            if (dist(points[i][0], points[i][1]) < dist(points[right][0], points[right][1])) {
                [points[i], points[pivot]] = [points[pivot], points[i]];
                pivot++;
            }
        }
        [points[right], points[pivot]] = [points[pivot], points[right]];
        if (pivot === k) return;
        if (pivot < k) quickSelect(pivot + 1, right);
        else quickSelect(left, pivot - 1);
    };
    quickSelect(0, points.length - 1);
    return points.slice(0, k);
}

