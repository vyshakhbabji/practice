

var findClosestElements = function(arr, k, x) {
    let low = 0, high = arr.length - k;  // Restrict high to arr.length - k

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Compare the distance between arr[mid] and x with arr[mid + k] and x
        if (x - arr[mid] > arr[mid + k] - x) {
            low = mid + 1;  // Move low if arr[mid + k] is closer
        } else {
            high = mid - 1;  // Move high if arr[mid] is closer
        }
    }

    // Slice the k closest elements starting from 'low'
    return arr.slice(low, low + k);
};



console.log(findKClosest([1,2,3,4,5],  4,  3))