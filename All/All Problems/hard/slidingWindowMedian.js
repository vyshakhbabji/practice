/*


The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.

For examples, if arr = [2,3,4], the median is 3.
For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
You are given an integer array nums and an integer k. 

There is a sliding window of size k which is moving from the very left of the array to the very right. 

You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the median array for each window in the original array. 

Answers within 10-5 of the actual value will be accepted.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
Explanation: 
Window position                Median
---------------                -----
[1  3  -1] -3  5  3  6  7        1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7        3
 1  3  -1  -3 [5  3  6] 7        5
 1  3  -1  -3  5 [3  6  7]       6
Example 2:

Input: nums = [1,2,3,4,2,3,1,4,2], k = 3
Output: [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]


General understanding 
1. the window slides one position at a time of every k sized window array 
2. We need to maintain sorted structure of the array 
3. As we slide we remove one element and add another 
3. We need to find median efficiently 

we will need to choose ds - 
1. max heap for lower half of numbers 
2. min heap for higher half of numbers 


Steps : 

1. initalize heap 
2 . calculate and store median for first window 
3. Slide window 
	remove element going out of window 
	add new eleemnt into the window 
	reblance heap 
	calcualte and store median 

*/




function medianSlidingWindow(nums, k){
	    // Initialize heaps
    const maxHeap = new MaxPriorityQueue();
    const minHeap = new MinPriorityQueue();

    // Helper function to remove element from heap
    function removeElementFromHeap(heap, value) {
        const temp = [];

        // Move all elements except the one to be removed to a temp array
        while (heap.size() > 0) {
            const current = heap.dequeue().element;
            if (current !== value) {
                temp.push(current);
            }
        }

        // Reinsert the elements back into the heap
        for (let elem of temp) {
            heap.enqueue(elem);
        }
    }

    // Helper function to balance the heaps
    function balanceHeaps() {
        if (maxHeap.size() > minHeap.size() + 1) {
            minHeap.enqueue(maxHeap.dequeue().element);
        } else if (minHeap.size() > maxHeap.size()) {
            maxHeap.enqueue(minHeap.dequeue().element);
        }
    }

    // Helper function to get the median
    function getMedian() {
        if (k % 2 === 0) {
            // If k is even, return the average of the two middle elements
            return (maxHeap.front().element + minHeap.front().element) / 2;
        } else {
            // If k is odd, return the top element of maxHeap
            return maxHeap.front().element;
        }
    }

    const result = [];

    // Main logic: processing the first window
    for (let i = 0; i < k; i++) {
        if (maxHeap.size() === 0 || nums[i] <= maxHeap.front().element) {
            maxHeap.enqueue(nums[i]);
        } else {
            minHeap.enqueue(nums[i]);
        }
        balanceHeaps();
    }

    // Add the median of the first window to the result
    result.push(getMedian());

    // Sliding window logic
    for (let i = k; i < nums.length; i++) {
        // Remove element going out of the window from heaps
        if (nums[i - k] <= maxHeap.front().element) {
            removeElementFromHeap(maxHeap, nums[i - k]);
        } else {
            removeElementFromHeap(minHeap, nums[i - k]);
        }

        // Add new element
        if (maxHeap.size() === 0 || nums[i] <= maxHeap.front().element) {
            maxHeap.enqueue(nums[i]);
        } else {
            minHeap.enqueue(nums[i]);
        }

        // Rebalance the heaps and add the median to the result
        balanceHeaps();
        result.push(getMedian());
    }

    return result;
}


















































