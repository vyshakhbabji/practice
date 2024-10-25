const findKthLargest = function(nums, k) {
    const minHeap = new MinPriorityQueue({ priority: x => x });

    for (const num of nums) {
        minHeap.enqueue(num);
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }

    return minHeap.front().element;
};
//Time Complexity:
// Heap operations (insert and remove): Each operation (insert and remove) in a heap of size k takes O(log k) time.
// Iterating through the array: The array has n elements, and we perform heap operations for each element.
// Thus, the overall time complexity is O(n log k).


var findKthLargest = function(nums, k) {
    const maxVal = Math.max(...nums);
    const minVal = Math.min(...nums);
    const range = maxVal - minVal + 1;
    const count = new Array(range).fill(0);

    // Count the occurrences of each value
    for (const num of nums) {
        count[num - minVal]++;
    }

    // Iterate from the largest to the smallest value
    let remaining = k;
    for (let i = count.length - 1; i >= 0; i--) {
        remaining -= count[i];
        if (remaining <= 0) {
            return i + minVal;
        }
    }
};

//Counting Sort Approach
// Time Complexity: O(n + range)
// O(n): This comes from the time it takes to iterate through the array to find the minimum and maximum values, as well as to count occurrences of each element.
// O(range): This comes from iterating over the count array to determine the k-th largest element.
// Key Point: The time complexity is linear with respect to n,
// but also depends on the range, which is the difference between the maximum and minimum values in the array plus one.
// If range is large (e.g., if the numbers in the array vary widely), the time complexity can increase significantly.



const findKthLargest = function(nums, k) {
    // Create an array to store the top k elements
    let heap = [];

    for (const num of nums) {
        heap.push(num);
        // Sort the array after each insertion
        heap.sort((a, b) => a - b);

        // Trim the array to keep only the largest k elements
        if (heap.length > k) {
            heap.shift(); // Remove the smallest element
        }
    }

    // The smallest element in the k-sized array is the k-th largest
    return heap[0];
};
